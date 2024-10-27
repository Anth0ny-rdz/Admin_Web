from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Fruta
from .serializers import FrutaSerializer

class FrutaViewSet(viewsets.ModelViewSet):
    queryset = Fruta.objects.all()
    serializer_class = FrutaSerializer
