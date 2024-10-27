from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FrutaViewSet

router = DefaultRouter()
router.register(r'frutas', FrutaViewSet)

urlpatterns = [
    path('', include(router.urls)), # Aquí defines la URL para tu API de frutas
    
]
