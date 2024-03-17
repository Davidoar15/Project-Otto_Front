import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import Servicios from './pages/Servicios/Servicios';
import Nosotros from './pages/Nosotros/Nosotros';
import Error from './pages/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Calculator from './pages/Calculator/Calculator';
import ModalBtn from './components/ContactModal/ModalBtn';
import DetallesProducto from './pages/Productos/Producto-Detalles/DetallesProducto';
import DetallesServicio from './pages/Servicios/Servicio-Detalles/DetallesServicio';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }
    const validRoutes = ["/productos", "/productos/detalles", "/servicios", "/servicios/detalles", "/nosotros", "/calculadora"];
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    if (!isValidRoute) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/detalles/:id' element={<DetallesProducto />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/servicios/detalles/:id' element={<DetallesServicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/calculadora' element={<Calculator />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ModalBtn />
      <Footer />
    </div>
  )
}

export default App
