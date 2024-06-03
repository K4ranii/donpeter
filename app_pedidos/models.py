from distutils.command.upload import upload
from django.db import models
import datetime

class Producto(models.Model):
    id_producto = models.CharField(max_length=6, primary_key=True, verbose_name='Id de Producto')
    nombre = models.CharField(max_length=100, verbose_name='Nombre')
    imagen = models.ImageField(upload_to='imagenes', null=True, blank=True, verbose_name='Imagen')
    precio = models.IntegerField(blank=True, null=True, verbose_name="Precio")

    def __str__(self):
        return self.id_producto

class Pedido(models.Model):
    id_pedido = models.CharField(max_length=6, primary_key=True, verbose_name='Id de Pedido')
    nombre_cliente = models.CharField(max_length=100, verbose_name='Nombre Cliente')
    telefono_cliente = models.CharField(max_length=20, verbose_name='Numero de Telefono')
    fecha = models.DateTimeField(auto_now_add=True, verbose_name="Fecha Creacion")
    estado = models.CharField(max_length=20, default='Pendiente', verbose_name='Estado')

    def __str__(self):
        return self.id_pedido


class Boleta(models.Model):
    id_boleta=models.AutoField(primary_key=True)
    total=models.BigIntegerField()
    fecha_compra=models.DateTimeField(blank=False, null=False, default = datetime.datetime.now)
    
    def __str__(self):
        return str(self.id_boleta)

class detalle_boleta(models.Model):
    id_boleta = models.ForeignKey('Boleta', blank=True, on_delete=models.CASCADE)
    id_detalle_boleta = models.AutoField(primary_key=True)
    id_producto = models.ForeignKey('Producto', on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    subtotal = models.BigIntegerField()

    def __str__(self):
        return str(self.id_detalle_boleta)
