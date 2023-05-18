from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import ItemSerializer
from .models import Item

class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = ItemSerializer # tell django what serializer to use

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all().order_by('id')
    serializer_class = ItemSerializer