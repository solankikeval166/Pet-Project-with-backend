from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=50,decimal_places=5)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    image = models.TextField()