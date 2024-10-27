import React, { useEffect, useState } from 'react';
import { getFrutas } from './services/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/TempLogin';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';

function App() {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    getFrutas().then((response) => {
      setFrutas(response.data);
    }).catch(error => {
      console.error('Error fetching frutas:', error);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Lista de Frutas</h1>
        <ul>
          {frutas.map((fruta) => (
            <li key={fruta.id_producto}>
              {fruta.NombreFruta} - ${fruta.precio}
            </li>
          ))}
        </ul>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
