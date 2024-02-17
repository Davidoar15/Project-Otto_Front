import React from 'react';
import style from './Home.module.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { imgSlider, repairGrid } from '../../JSON';
import GridHome from '../../components/GridHome/GridHome';
import calc from '../../assets/calc.png';
import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <div className={style.container}>
      <div className={style.conImageSlider}>
        <ImageSlider slides={imgSlider} />
      </div>

      <br/><br/>
        <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          <h1>SITIO WEB EN CONSTRUCCION</h1>
        </div>
      <br/><br/><br/>

      <div className={style.conGridHome}>
        <GridHome images={repairGrid}/>
      </div>

      <br/>

      <div className={style.conInfo}>
        <h1>Información</h1>
        <div className={style.info}>
          <div className={style.conImage}>
            <img src={repairGrid[0].img}/>
          </div>

          <div className={style.text}>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, totam. Nemo ea qui voluptate expedita. Provident alias repellendus repudiandae, hic vero quis eveniet deserunt optio minus voluptate molestias atque eos?
            </p>

            <div className={style.subText}>
              <h3>Ofrecemos: </h3>
              <div>
                <p>Servicio 1</p>
                <p>Servicio 2</p>
                <p>Servicio 3</p>
                <p>Servicio 4</p>
              </div>
            </div>

            <h3>¿Quieres agilizar? Prueba con:</h3>
            <NavLink to='/calculadora' className={style.navlink}>
              <div className={style.conCalc}>
                <div className={style.conCalcImg}>
                  <img src={calc}/>
                </div>
                <h2>Calcular tu Equipo</h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home