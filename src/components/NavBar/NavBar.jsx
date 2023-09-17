import React from 'react';
import logo from '../../assets/logo21Grados.jpg';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <NavLink to='/'>
          <img src={logo} className={style.logo} alt='logo'/>
        </NavLink>
      </div>

      <div className={style.links}>
        <NavLink to='/productos' className={style.navlink}>
          <p>Productos</p>
        </NavLink>
        <NavLink to='/servicios' className={style.navlink}>
          <p>Servicios</p>
        </NavLink>
        <NavLink to='/nosotros' className={style.navlink}>
          <p>Nosotros</p>
        </NavLink>
      </div> 
    </div>
  )
}

export default NavBar