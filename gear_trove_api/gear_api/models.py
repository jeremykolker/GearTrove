from django.db import models

# Create your models here.
class Item(models.Model):
    kind = models.CharField(max_length=32)
    make = models.CharField(max_length=32)
    model = models.CharField(max_length=32)
    color = models.CharField(max_length=32)
    year = models.IntegerField()