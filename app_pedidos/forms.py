from django import forms
from .models import Producto

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
