from django.urls import path
from app_pedidos.views import *
from django.contrib.auth import views as auth_views
urlpatterns = [
    path('', index,name='index'),
    path('pedidos', pedidos,name='pedidos'),
    path('eliminar_producto/<producto_id>', eliminar_producto, name="eliminar"),
    path('horario-diario', horario_diario, name='horario_diario'),
    path('login', login_view,name='login'),
    path('registro', registro,name='registro'),
    path('agregar/<id>', agregar_producto, name="agregar"),
    path('agregar_ifrm/<id>', agregar_de_iframe, name="agregar_de_iframe"),
    path('restar/<id>', restar_producto, name="restar"),
    path('limpiar/', limpiar_carrito, name="limpiar"),
     path('lista_pedidos', lista_pedidos,name='lista_pedidos'),
        path('carrito/', carrito, name="carrito"),
            path('webpay-plus/create', webpay_plus_create, name='webpay_plus_create'),
    path('webpay-plus/commit', webpay_plus_commit, name='webpay_plus_commit'),
    path('webpay-plus/commit-error', webpay_plus_commit_error, name='webpay_plus_commit_error'),
    path('webpay-plus/refund', webpay_plus_refund, name='webpay_plus_refund'),
    path('webpay-plus/refund-form', webpay_plus_refund_form, name='webpay_plus_refund_form'),
    path('webpay-plus/status-form', show_create, name='webpay_plus_status_form'),
    path('webpay-plus/status', status, name='webpay_plus_status'),
    path('procesar_pago/', procesar_pago,name="procesar_pago"),
    path('guardar_y_redirigir/', guardar_y_redirigir, name='guardar_y_redirigir'),
    path('logout/', user_logout, name='logout'),

     ]