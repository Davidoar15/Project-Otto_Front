import React from 'react';
import style from './CardServicio.module.css';

function CardService({ service }) {

    const { name, price, image } = service;

  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img 
          src={image}
          alt={name}
          className={style.img}
        />
      </div>

      <div className={style.infoCard}>
        <div>
            <h2 className={style.name}>{name}</h2>
        </div>

        <div>
            <h2 className={style.price}>{price}</h2>
        </div>
      </div>
    </div>
  )
}

export default CardService