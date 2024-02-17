import React from 'react';
import style from './Card.module.css';

function Card({ product }) {

    const { name, price, image } = product;

  return (
    <div className={`${style.cardContainer} ${style.shadow}`}>
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

export default Card