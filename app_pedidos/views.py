from app_pedidos.compra import Carrito
from .models import Producto, Boleta, detalle_boleta
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseBadRequest
from transbank.error.transbank_error import TransbankError
from transbank.webpay.webpay_plus.transaction import Transaction
import random

def index(request):
    return render(request, 'index.html')

def pedidos(request):
    productos= Producto.objects.all()
	
    return render(request, 'pedidos.html',context={'productos':productos})


def carrito(request):
    
    return render(request, 'carrito.html')



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
        productos=[]
        precio_total=0
        if response['status'] == 'AUTHORIZED':
            precio_total = 0
            for key, value in request.session['carrito'].items():
                precio_total += int(value['precio']) * int(value['cantidad'])

            boleta = Boleta(total=precio_total)
            if precio_total!=0:
                boleta.save()

            productos = []
            for key, value in request.session['carrito'].items():
                producto = Producto.objects.get(id_producto=value['producto_id'])
                cant = value['cantidad']
                subtotal = cant * int(value['precio'])
                detalle = detalle_boleta(id_boleta=boleta, id_producto=producto, cantidad=cant, subtotal=subtotal)
                detalle.save()
                productos.append(detalle)

            request.session['boleta'] = boleta.id_boleta

            carrito = Carrito(request)
            carrito.limpiar()
        context = {'token': token, 'response': response, 'productos': productos, 'total': precio_total}

        return render(request, 'webpay/plus/commit.html', context)
    elif request.method == 'POST':
        token = request.POST.get("token_ws")
        print("commit error for token_ws: {}".format(token))
        response = {
            "error": "Transacción con errores"
        }

        return render(request, 'webpay/plus/commit.html', {'token': token, 'response': response})
    










    ##Default Webpay:

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
