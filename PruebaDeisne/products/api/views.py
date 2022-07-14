from rest_framework.viewsets import ModelViewSet
from products.models import Products
from products.api.serializers import ProductsSerializer

class ProductsApiViewSet(ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = Products.objects.all()