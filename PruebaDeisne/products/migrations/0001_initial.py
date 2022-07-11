# Generated by Django 4.0.4 on 2022-07-11 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('tipo_obra', models.TextField(max_length=50)),
                ('artista', models.TextField(max_length=50)),
                ('valor', models.IntegerField()),
                ('descripcion', models.TextField(max_length=50)),
                ('pathImagen', models.TextField(max_length=50)),
                ('codigoProducto', models.IntegerField()),
                ('tecnica', models.TextField(max_length=50)),
                ('otros_detalles', models.TextField(max_length=50)),
                ('dimensiones', models.TextField(max_length=50)),
                ('envio', models.TextField(max_length=50)),
                ('anno', models.IntegerField()),
            ],
            options={
                'db_table': 'products',
            },
        ),
    ]
