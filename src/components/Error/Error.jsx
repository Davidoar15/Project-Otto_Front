import React from 'react';
import errorImage from '../../assets/NotFound.png';
import style from "./Error.module.css";

function Error() {

  return (
    <div className={style.container}>
        <div style={{width: "200px", height: "auto"}}>
          <img style={{width: "100%", height: "100%"}} src={errorImage} alt='Page Error'/>
        </div>
        <h1>ERROR 404: Página No Encontrada</h1>
        <h3>
          Vaya, parece que no podemos encontrar 
          la página que buscas. Intenta volver a 
          la página anterior
        </h3>
    </div>
  );
}

export default Error;