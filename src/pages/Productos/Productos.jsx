import React from 'react';
import style from './Productos.module.css';
import { products } from '../../JSON/index';
import { NavLink } from 'react-router-dom';
import CardProducto from './Productos-Card/CardProducto';

function Productos() {

  return (
    <div className={style.container}>
      <h3>NUESTROS PRODUCTOS</h3>
      <div className={style.productos}>
        {
          products.map((product) => (
            <NavLink 
              to={`/productos/detalles/${product.id}`}
              className={style.navLink}
            >
              <CardProducto
                key={product.id}
                product={product} 
              />
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Productos;