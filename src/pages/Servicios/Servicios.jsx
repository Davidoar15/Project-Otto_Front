import React from 'react';
import style from './Servicios.module.css';
import { services } from '../../JSON/index';
import CardServicio from './Servicios-Card/CardServicio';
import { NavLink } from 'react-router-dom';

function Servicios() {

  return (
    <div className={style.container}>
      <h3>NUESTROS SERVICIOS</h3>
      <div className={style.productos}>
        {
          services.map((service) => (
            <NavLink 
              to={`/servicios/detalles/${service.id}`}
              className={style.navLink}
            >
              <CardServicio
                key={service.id}
                service={service} 
              />
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Servicios