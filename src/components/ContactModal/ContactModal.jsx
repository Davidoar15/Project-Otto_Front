import React, { useState } from "react";
import { useForm } from "@formspree/react";
import style from "./styles.module.css";

const ContactModal = ({ handle }) => {
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
  const isFormEmpty = Object.values(formValues).some(
    (value) => value.trim() === ""
  );

  return (
        <div className={style.overlay}>
          {state.succeeded ? (
            <div className={style.thanks}>
              <h1>¡Gracias por Comunicarte!</h1>
              <h4 onClick={handle}>X</h4>
              <p>Estaremos respondiendo a la brevedad posible</p>
            </div>
          ) : (
            <div className={style.contact}>
              <h1>¡Contáctanos!</h1>
              <h4 onClick={handle}>X</h4>
              <form onSubmit={handleSubmit} className={style.contactForm}>
                <div className={style.inputs}>
                  <div className={style.labels}>
                    <label>Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Ingrese su Nombre..."
                    />
                  </div>

                  <div className={style.labels}>
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Ingrese su E-mail..."
                    />
                  </div>
                </div>

                <div className={style.textareaContact}>
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    cols={20}
                    rows={6}
                    placeholder="Déjanos tu Mensaje..."
                  ></textarea>
                </div>

                <div className={style.conSubmitBtn}>
                  <button
                    type="submit"
                    disabled={isFormEmpty}
                    className={`${
                      isFormEmpty ? style.btnDisabled : style.btnActive
                    }`}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
  );
};

export default ContactModal;
