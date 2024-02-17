import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import Servicios from './pages/Servicios/Servicios';
import Nosotros from './pages/Nosotros/Nosotros';
import Error from './pages/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Detalles from './pages/Productos/Product-Detalles/Detalles';
import Calculator from './pages/Calculator/Calculator';
import ModalBtn from './components/ContactModal/ModalBtn';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }
    const validRoutes = ["/productos", "/detalles", "/servicios", "/nosotros", "/calculadora"];
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
        <Route path='/detalles/:id' element={<Detalles />} />
        <Route path='/servicios' element={<Servicios />} />
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
