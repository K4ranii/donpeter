from app_pedidos.compra import Carrito
from .models import Producto, Boleta, detalle_boleta,Pedido
from django.urls import reverse
from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseBadRequest,HttpResponseRedirect
from transbank.error.transbank_error import TransbankError
from transbank.webpay.webpay_plus.transaction import Transaction
from .forms import PedidoForm,RegistroUserForm
import random
from django.contrib.auth import login
from datetime import datetime

def esta_abierto():
    # Definir los horarios de atención por día de la semana
    horarios = {
        0: ('08:00', '18:00'),   # Lunes
        1: ('08:30', '20:00'),   # Martes
        2: ('07:00', '16:00'),   # Miércoles
        3: ('09:00', '21:00'),   # Jueves
        4: ('08:40', '18:30'),
        # Puedes agregar los horarios del fin de semana si aplica
    }

    ahora = datetime.now()
    dia_semana = ahora.weekday()  # Devuelve el día de la semana (0=Lunes, 1=Martes, ..., 6=Domingo)
    
    if dia_semana in horarios:
        horario_inicio, horario_fin = horarios[dia_semana]
        hora_actual = ahora.strftime('%H:%M')

        if horario_inicio <= hora_actual <= horario_fin:
            return True

    return False 

def login_view(request):
    return render(request, 'login.html')

def registro(request):
    if request.method == 'POST':
        form = RegistroUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Opcional: Inicia sesión automáticamente después del registro
            return redirect('index')  # Redirige a una página de éxito
    else:
        form = RegistroUserForm()
    return render(request, 'registro.html', {'form': form})


def index(request):
    return render(request, 'index.html')

def horario_diario(request):
    return render(request, 'horario-diario.html')

def pedidos(request):
    productos= Producto.objects.all()
	
    return render(request, 'pedidos.html',context={'productos':productos})

def carrito(request):
    pedido_form = PedidoForm()

    if request.method == 'POST':
        pedido_form = PedidoForm(request.POST)
        if pedido_form.is_valid():
            # Guardar datos del formulario en la sesión
            request.session['pedido_form_data'] = pedido_form.cleaned_data

            # Imprimir el contenido de la sesión en la consola de Django
            print(request.session.items())

    abierto = esta_abierto()

    context = {
        'pedido_form': pedido_form,
        'abierto': abierto,
    }

    return render(request, 'carrito.html', context)


def agregar_de_iframe(request, id):
    carrito_compra = Carrito(request)
    producto = Producto.objects.get(id_producto=id)
    carrito_compra.agregar(producto=producto)
    return redirect('carrito')

def agregar_producto(request, id):
    carrito_compra = Carrito(request)
    producto = Producto.objects.get(id_producto=id)
    carrito_compra.agregar(producto=producto)
    return redirect('pedidos')


def eliminar_producto(request, id):
    carrito_compra= Carrito(request)
    producto = Producto.objects.get(id_producto=id)
    carrito_compra.eliminar(producto=producto)
    return redirect('carrito')

def restar_producto(request, id):
    carrito_compra= Carrito(request)
    producto = Producto.objects.get(id_producto=id)
    carrito_compra.restar(producto=producto)
    return redirect('carrito')

def limpiar_carrito(request):
    carrito_compra= Carrito(request)
    carrito_compra.limpiar()
    return redirect('carrito')  
  
def lista_pedidos(request):
    pedidos = Pedido.objects.all()
    return render(request, 'lista_pedidos.html', context={'pedidos':pedidos})


def guardar_y_redirigir(request):
    if request.method == 'POST':
        form = PedidoForm(request.POST)
        if form.is_valid():
            # Guarda los datos en la sesión en lugar de la base de datos
            request.session['pedido'] = {
                'nombre_cliente': form.cleaned_data.get('nombre_cliente', 'Nulo'),
                'telefono_cliente': form.cleaned_data.get('telefono_cliente', 'Nulo'),
                'detalles': form.cleaned_data.get('detalles', 'Nulo'),
            }
            # Redirige a la vista de procesar pago
            return redirect('procesar_pago')
    else:
        return redirect('carrito') 

def procesar_pago(request):
    if request.method == 'GET':
        if not request.session.get('carrito'):
            return render(request, 'webpay/plus/error.html', {'error': 'El carrito está vacío'})
        
        precio_total = 0
        for key, value in request.session['carrito'].items():
            precio_total += int(value['precio']) * int(value['cantidad'])
        buy_order = str(random.randrange(1000000, 99999999))
        session_id = str(random.randrange(1000000, 99999999))
        return_url = request.build_absolute_uri('/webpay-plus/commit')

        create_request = {
            "buy_order": buy_order,
            "session_id": session_id,
            "amount": precio_total,
            "return_url": return_url
        }

        try:
            response = Transaction().create(buy_order, session_id, precio_total, return_url)
            return render(request, 'webpay/plus/create.html', {'request': create_request, 'response': response})
        except Exception as e:
            return render(request, 'webpay/plus/error.html', {'error': str(e)})
    else:
        return render(request, 'webpay/plus/error.html', {'error': 'Método HTTP no permitido'})


def webpay_plus_commit(request):
    if request.method == 'GET':
        token = request.GET.get("token_ws")
        if token is None:
            return HttpResponseBadRequest("El parámetro 'token_ws' es requerido en la URL.")

        print("commit for token_ws: {}".format(token))

        response = Transaction().commit(token=token)
        print("response: {}".format(response))
        productos = []
        precio_total = 0

        if response['status'] == 'AUTHORIZED':
            # Calcular el precio total del carrito
            for key, value in request.session['carrito'].items():
                precio_total += int(value['precio']) * int(value['cantidad'])

            # Crear una nueva instancia de Boleta y guardarla si el precio total es mayor que cero
            boleta = Boleta(total=precio_total)
            if precio_total != 0:
                boleta.save()

            # Guardar detalles de la boleta en la base de datos
            productos = []
            for key, value in request.session['carrito'].items():
                producto = Producto.objects.get(id_producto=value['producto_id'])
                cant = value['cantidad']
                subtotal = cant * int(value['precio'])
                detalle = detalle_boleta(id_boleta=boleta, id_producto=producto, cantidad=cant, subtotal=subtotal)
                detalle.save()
                productos.append(detalle)

            # Guardar el ID de la boleta en la sesión
            request.session['boleta'] = boleta.id_boleta
            print(request.session.items())
            # Obtener los detalles del pedido de la sesión
            detalles_pedido = request.session.get('pedido_form_data')
            print("Detalles del pedido obtenidos:", detalles_pedido)
            if detalles_pedido:
                # Generar un ID único para el pedido
                id_pedido = f'PED-{datetime.now().strftime("%m%d%H%M%S%f")}'

                # Crear instancia de Pedido y guardar en la base de datos
                nuevo_pedido = Pedido(
                    id_pedido=id_pedido,
                    nombre_cliente=detalles_pedido['nombre_cliente'],
                    telefono_cliente=detalles_pedido['telefono_cliente'],
                    detalles=detalles_pedido['detalles'],
                    fecha=datetime.now(),
                    estado='Pendiente',
                    boleta=boleta
                )
                nuevo_pedido.save()

                # Limpiar el carrito después de guardar la compra
                carrito = Carrito(request)
                carrito.limpiar()

                # Limpiar los detalles del pedido de la sesión
                del request.session['pedido_form_data']

        context = {'token': token, 'response': response, 'productos': productos, 'total': precio_total, 'detalles' : detalles_pedido}

        return render(request, 'webpay/plus/commit.html', context)
    else:
        return HttpResponseBadRequest("Método no permitido")

def webpay_plus_commit_error(request):
    return HttpResponse("Error en la transacción de pago")

def webpay_plus_refund(request):
    if request.method == 'POST':
        token = request.POST.get("token_ws")
        amount = request.POST.get("amount")
        print("refund for token_ws: {} by amount: {}".format(token, amount))

        try:
            response = Transaction().refund(token, amount)
            print("response: {}".format(response))

            return render(request, "webpay/plus/refund.html", {'token': token, 'amount': amount, 'response': response})
        except TransbankError as e:
            print(e.message)

def webpay_plus_refund_form(request):
    # Lógica para mostrar el formulario de reembolso
    return render(request, 'webpay/plus/refund-form.html')

def show_create(request):
    # Lógica para mostrar el formulario de estado
    return render(request, 'webpay/plus/status-form.html')

def status(request):
    token_ws = request.POST.get('token_ws')
    tx = Transaction()
    resp = tx.status(token_ws)
    return render(request, 'webpay/plus/status.html', {'response': resp, 'token': token_ws, 'req': request.POST})

def webpay_plus_create(request):
    if request.method == 'GET':
        buy_order = str(random.randrange(1000000, 99999999))
        session_id = str(random.randrange(1000000, 99999999))
        amount = random.randrange(10000, 1000000)
        return_url = request.build_absolute_uri('/webpay-plus/commit')

        create_request = {
            "buy_order": buy_order,
            "session_id": session_id,
            "amount": amount,
            "return_url": return_url
        }

        response = Transaction().create(buy_order, session_id, amount, return_url)

        return render(request, 'webpay/plus/create.html', {'request': create_request, 'response': response})
