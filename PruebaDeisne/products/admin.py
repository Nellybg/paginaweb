from django.contrib import admin
from products.models import Products
# Register your models here.
@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ["id", "codigoProducto", "nombre", "tipo_obra", "artista","descripcion", "dimensiones", "anno", "envio", "valor", "tecnica", "otros_detalles"]