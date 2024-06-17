from django import forms
from .models import Producto, Pedido

class ProductoForm(forms.ModelForm):
    id_producto = forms.CharField(label='Id de Producto', widget=forms.TextInput(attrs={'readonly': 'readonly', 'class': 'form-control'}))
    nombre = forms.CharField(label='Nombre', widget=forms.TextInput(attrs={'class': 'form-control'}))
    imagen = forms.ImageField(label='Imagen', required=False, widget=forms.FileInput(attrs={'class': 'form-control'}))
    precio = forms.IntegerField(label='Precio', widget=forms.NumberInput(attrs={'class': 'form-control'}))

    class Meta:
        model = Producto
        fields = ['id_producto', 'nombre', 'imagen', 'precio']

    def clean_id_producto(self):
        return self.instance.id_producto

    def __init__(self, *args, **kwargs):
        super(ProductoForm, self).__init__(*args, **kwargs)
        self.fields['id_producto'].disabled = True



class PedidoForm(forms.ModelForm):
    class Meta:
        model = Pedido
        fields = ['nombre_cliente', 'telefono_cliente', 'detalles']
        labels = {
            'nombre_cliente': 'Nombre del Cliente',
            'telefono_cliente': 'Teléfono del Cliente',
            'detalles': 'Detalles del Pedido'
        }
        widgets = {
            'nombre_cliente': forms.TextInput(attrs={
                'placeholder': 'Ingrese el nombre del cliente..',
                'id': 'nombre_cliente',
                'class': 'form-control',
            }),
            'telefono_cliente': forms.TextInput(attrs={
                'placeholder': 'Ingrese el teléfono del cliente..',
                'id': 'telefono_cliente',
                'class': 'form-control',
            }),
            'detalles': forms.Textarea(attrs={
                'placeholder': 'Ingrese los detalles del pedido..',
                'id': 'detalles',
                'class': 'form-control',
                'rows': 4  # Ajusta el tamaño vertical del área de texto
            })
        }

    def clean_id_pedido(self):
        # Puedes agregar validaciones personalizadas para el campo id_pedido si es necesario
        return self.cleaned_data['id_pedido']