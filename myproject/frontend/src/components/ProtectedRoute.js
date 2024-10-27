import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    // Redirige al login si el usuario no está autenticado
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
