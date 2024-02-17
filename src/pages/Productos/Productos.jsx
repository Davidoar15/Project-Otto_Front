import React from 'react';
import style from './Productos.module.css';
import { products } from '../../JSON/index';
import Card from './Productos-Card/Card';
import { NavLink } from 'react-router-dom';

function Productos() {

  return (
    <div className={style.container}>
      <div className={style.productos}>
        {
          products.map((product) => (
            <NavLink 
              to={`/detalles/${product.id}`}
              className={style.navLink}
            >
              <Card
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

export default Productos