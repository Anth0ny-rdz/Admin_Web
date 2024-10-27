# Admin_Web
# Proyecto Django + React - CRUD de Frutas de Temporada

Este proyecto consiste en una aplicación web que permite gestionar un CRUD (Crear, Leer, Actualizar, Eliminar) de frutas de temporada, utilizando Django para el backend y React para el frontend. Además, incluye autenticación de usuarios utilizando JWT.

## Estructura del Proyecto

myproject/ │ ├── backend/ # Carpeta para el backend (Django) │ ├── myapp/ # Aplicación de Django │ │ ├── migrations/ │ │ ├── static/ # Archivos estáticos │ │ ├── templates/ # Plantillas HTML (si las usas) │ │ ├── init.py │ │ ├── admin.py │ │ ├── apps.py │ │ ├── models.py # Modelos (base de datos) │ │ ├── views.py # Vistas (lógica de la aplicación) │ │ ├── urls.py # Rutas de la aplicación │ │ └── serializers.py # Serializadores para la API │ ├── myproject/ # Configuración general del proyecto Django │ │ ├── init.py │ │ ├── settings.py # Configuraciones de Django │ │ ├── urls.py # Rutas principales │ │ └── wsgi.py │ ├── manage.py │ ├── frontend/ # Carpeta para el frontend (React) │ ├── public/ │ ├── src/ │ │ ├── components/ # Componentes de React │ │ ├── services/ # Servicios para interactuar con la API │ │ ├── App.js # Componente principal de la app │ │ ├── index.js │ └── package.json │ ├── venv/ # Entorno virtual └── README.md

markdown
Copy code

## Dependencias

### Backend (Django)

1. **Instalar Django y Django REST framework**
   ```bash
   pip install django djangorestframework
Instalar CORS headers

bash

pip install django-cors-headers
Instalar Django Allauth (opcional)

bash

pip install django-allauth
Instalar JWT para autenticación

bash

pip install djangorestframework-simplejwt
Frontend (React)
Crear el proyecto React

bash

npx create-react-app frontend
Instalar Axios

bash

npm install axios
Instalar React Router

bash

npm install react-router-dom
Instalar Bootstrap (opcional)

bash

npm install bootstrap
Instalar JWT-decode

bash

npm install jwt-decode
Configuración del Backend
Modelos (en myapp/models.py)

python

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
Serializadores (en myapp/serializers.py)

python
Copy code
from rest_framework import serializers
from .models import Fruta

class FrutaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fruta
        fields = '__all__'
Vistas (en myapp/views.py)

python

from rest_framework import viewsets
from .models import Fruta
from .serializers import FrutaSerializer

class FrutaViewSet(viewsets.ModelViewSet):
    queryset = Fruta.objects.all()
    serializer_class = FrutaSerializer
URLs (en myapp/urls.py)

python

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FrutaViewSet

router = DefaultRouter()
router.register(r'frutas', FrutaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
Configuración de Django (en myproject/settings.py) Asegúrate de incluir las configuraciones necesarias para CORS y JWT.

Configuración del Frontend
Servicios API (en frontend/src/services/api.js)

javascript
Copy code
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

export const getFrutas = () => {
  return axios.get(`${API_URL}frutas/`);
};
Componente Principal (en frontend/src/App.js)

javascript
Copy code
import React, { useEffect, useState } from 'react';
import { getFrutas } from './services/api';

function App() {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    getFrutas().then((response) => {
      setFrutas(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Frutas</h1>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta.id_producto}>
            {fruta.NombreFruta} - ${fruta.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
Ejecución del Proyecto
Backend:

Navega a la carpeta backend y ejecuta:
bash
Copy code
python manage.py runserver
Frontend:

Navega a la carpeta frontend y ejecuta:
bash
Copy code
npm start
