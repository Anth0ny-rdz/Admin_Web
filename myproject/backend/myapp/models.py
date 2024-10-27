from django.db import models

class Fruta(models.Model):
    id_producto = models.AutoField(primary_key=True)
    NombreFruta = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    estado = models.BooleanField(default=True)
    descripcion = models.TextField()
    stock = models.IntegerField()
    tipo = models.CharField(max_length=50)
    categoria = models.CharField(max_length=50)

    def __str__(self):
        return self.NombreFruta
