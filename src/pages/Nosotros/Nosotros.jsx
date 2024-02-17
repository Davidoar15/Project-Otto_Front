import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import style from './Nosotros.module.css';

import AOS from "aos";
import "aos/dist/aos.css";
import MapBtn from '../../components/Map/MapBtn';

function Nosotros() {

  /*
  const [state, handleSubmit] = useForm("xeqbweel");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const isFormEmpty = Object.values(formValues).some((value) => value.trim() === "");
  */

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <div data-aos="fade-right" className={style.block}>
          <h1>¿Quiénes Somos?</h1>
          <div className={`${style.text} ${style.shadow}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis, eius facere sunt nulla omnis voluptate a hic sit assumenda iste earum consequuntur temporibus aperiam repellat esse recusandae molestias numquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ex magnam nobis culpa, dolores rerum explicabo voluptatum, aliquid quis molestias tempore facere omnis temporibus ipsam vero qui provident. Fugit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non, vero alias pariatur nam rerum quo modi atque facilis incidunt! Ut labore in debitis dolores! Ea consequatur ipsum quos vel.
            </p>
          </div>
        </div>

        <div data-aos="fade-left"  className={style.block}>
          <h1>Nuestra Misión</h1>
          <div className={`${style.text} ${style.shadow}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis, eius facere sunt nulla omnis voluptate a hic sit assumenda iste earum consequuntur temporibus aperiam repellat esse recusandae molestias numquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia ex magnam nobis culpa, dolores rerum explicabo voluptatum, aliquid quis molestias tempore facere omnis temporibus ipsam vero qui provident. Fugit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non, vero alias pariatur nam rerum quo modi atque facilis incidunt! Ut labore in debitis dolores! Ea consequatur ipsum quos vel.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <MapBtn />
      </div>
    </div>
    
    )
  }
{/* 
        {
          state.succeeded 
          ? (
            <div data-aos="fade-up" className={style.thanks}>
              <h1>¡Gracias por Comunicarte!</h1>
              <p>Estaremos respondiendo a la brevedad posible</p>
            </div>
          ) : (
            <div data-aos="fade-up" className={style.contact}>
              <h1>¡Contáctanos!</h1>
  
              <form 
                onSubmit={handleSubmit}
                className={style.contactForm}
              >
                <div className={style.inputs}>
                  <div className={style.labels}>
                    <label>Nombre</label>
                    <input 
                      type='text'
                      name='name'
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder='Ingrese su Nombre...'
                  />
                  </div>
  
                  <div className={style.labels}>
                    <label>E-mail</label>
                    <input 
                      type='email'
                      name='email'
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder='Ingrese su E-mail...'
                    />
                  </div>
                </div>
  
                <div className={style.textareaContact}>
                  <textarea
                    name='message'
                    value={formValues.message}
                    onChange={handleChange}
                    cols={20} rows={6}
                    placeholder='Déjanos tu Mensaje...'
                  ></textarea>
                </div>
  
                <div>
                  <button
                    type='submit'
                    disabled={isFormEmpty}
                    className={`${isFormEmpty ? style.btnDisabled : style.btnActive}`}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          )
        }
         */}

export default Nosotros