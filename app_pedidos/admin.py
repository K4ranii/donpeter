from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Producto)
admin.site.register(Pedido)
admin.site.register(Boleta)
admin.site.register(detalle_boleta)