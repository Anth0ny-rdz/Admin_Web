from rest_framework import serializers
from .models import Fruta

class FrutaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fruta
        fields = '__all__'
