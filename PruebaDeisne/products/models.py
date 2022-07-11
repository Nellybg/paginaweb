from django.db import models

# Create your models here.
class Products(models.Model):  
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    tipo_obra = models.TextField(max_length=50)
    artista = models.TextField(max_length=50)
    valor = models.IntegerField()
    descripcion = models.TextField(max_length=50)
    pathImagen = models.TextField(max_length=50)
    codigoProducto = models.IntegerField()
    tecnica = models.TextField(max_length=50)
    otros_detalles = models.TextField(max_length=50)
    dimensiones = models.TextField(max_length=50)
    envio = models.TextField(max_length=50)
    anno = models.IntegerField()
    class Meta:  
        db_table = "products"
