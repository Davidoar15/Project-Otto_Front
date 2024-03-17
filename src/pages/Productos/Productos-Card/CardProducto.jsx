import React from 'react';
import style from './CardProducto.module.css';

function CardProducto({ product }) {

    const { name, price, image } = product;

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

export default CardProducto;