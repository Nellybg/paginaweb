from rest_framework.serializers import ModelSerializer
from products.models import Products

class ProductsSerializer(ModelSerializer):
    class Meta:
        model = Products
        fields = ["id", "codigoProducto", "nombre", "tipo_obra", "artista","descripcion", "dimensiones", "anno", "envio", "valor", "tecnica", "otros_detalles"]