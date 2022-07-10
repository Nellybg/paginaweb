from django.db import models

# Create your models here.
class Products(models.Model):  
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    cod_prod = models.IntegerField()
    tipo_obra = models.TextField(max_length=50)
    artista = models.TextField(max_length=50)
    valor = models.IntegerField()
    descripcion = models.TextField(max_length=50)
    pathImagen = models.TextField(max_length=50)
    class Meta:  
        db_table = "products"
