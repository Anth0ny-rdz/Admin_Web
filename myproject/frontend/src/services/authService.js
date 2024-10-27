import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Importación corregida

const API_URL = 'http://localhost:8000/api';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/token/`, {
    username,
    password,
  });

  // Guarda los tokens en el localStorage
  localStorage.setItem('access_token', response.data.access);
  localStorage.setItem('refresh_token', response.data.refresh);
};

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');

  if (token) {
    try {
      const decodedToken = jwtDecode(token); // Decodificación del token
      const currentTime = Date.now() / 1000;

      // Verifica si el token ha expirado
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error('Error al decodificar el token', error);
      return false;
    }
  }
  return false;
};

export default {
  login,
  logout,
  isAuthenticated,
};
