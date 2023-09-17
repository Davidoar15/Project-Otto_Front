import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Servicios from './components/Servicios/Servicios';
import Error from './components/Error/Error';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }
    const validRoutes = ["/productos", "/servicios"];
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    if (!isValidRoute) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
