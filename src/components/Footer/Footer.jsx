import React from 'react';
import style from './Footer.module.css';

function Footer() {

  return (
    <div className={style.container}>
      <a id="lnkEmailAddress" href="mailto:contacto%4021grados.cl">contacto@21grados.cl</a>
      <p>© 2023 21Grados Chile</p>
    </div>
  )
}

export default Footer