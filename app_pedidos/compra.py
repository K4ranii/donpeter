

class Carrito:
    def __init__(self, request):
        self.request = request
        self.session = request.session
        carrito = self.session.get("carrito")
        if not carrito:
            carrito = self.session["carrito"] = {}
        self.carrito=carrito 
    
    def agregar(self, producto):
        if producto.id_producto not in self.carrito.keys():
            self.carrito[producto.id_producto]={
                "producto_id":producto.id_producto, 
                "nombre": producto.nombre,
                "precio": str (producto.precio),
                "cantidad": 1,
                "total": producto.precio,

            }
        else:
            for key, value in self.carrito.items():
                if key==producto.id_producto:
                    value["cantidad"] = value["cantidad"]+1
                    value["precio"] = producto.precio
                    value["total"]= value["total"] + producto.precio
                    break
        self.guardar_carrito()

    def guardar_carrito(self):
        self.session["carrito"] = self.carrito
        self.session.modified=True


    def eliminar(self, producto):
        id = producto.id_producto
        if id in self.carrito: 
            del self.carrito[id]
            self.guardar_carrito()
    
    def restar (self,producto):
        for key, value in self.carrito.items():
            if key == producto.id_producto:
                value["cantidad"] = value["cantidad"]-1
                value["total"] = int(value["total"])- producto.precio
                if value["cantidad"] < 1:   
                    self.eliminar(producto)
                break
        self.guardar_carrito()
     
    def limpiar(self):
        self.session["carrito"]={}
        self.session.modified=True 


class PedidoSesion:
    def __init__(self, request):
        self.request = request
        self.session = request.session
        detalles_pedido = self.session.get("detalles_pedido")
        if not detalles_pedido:
            detalles_pedido = self.session["detalles_pedido"] = {}
        self.detalles_pedido = detalles_pedido

    def guardar_detalles(self, nombre_cliente, telefono_cliente, detalles):
        self.detalles_pedido = {
            "nombre_cliente": nombre_cliente,
            "telefono_cliente": telefono_cliente,
            "detalles": detalles,
        }
        self.guardar_detalles_pedido()

    def obtener_detalles(self):
        return self.detalles_pedido

    def limpiar_detalles(self):
        self.session["detalles_pedido"] = {}
        self.session.modified = True

    def guardar_detalles_pedido(self):
        self.session["detalles_pedido"] = self.detalles_pedido
        self.session.modified = True