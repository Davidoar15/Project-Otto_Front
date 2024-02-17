import { useState } from "react";
import style from "./Calculator.module.css";
import { calculateCooling, calculateHeating } from "./calcs";

const Calculator = () => {
  const [coolData, setCoolData] = useState({
    frigHr: 0,
    btu: 0,
    m: 0,
    h: 0,
    type: "",
  });
  const [hotData, setHotData] = useState({ kcal: 0, m: 0, h: 0, type: "" });

  const handleCoolInputChangeM = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setCoolData((prevData) => ({ ...prevData, [e.target.name]: value }));
    updateCoolingResult(value, coolData.h, coolData.type);
  };

  const handleCoolInputChangeH = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setCoolData((prevData) => ({ ...prevData, [e.target.name]: value }));
    updateCoolingResult(coolData.m, value, coolData.type);
  };

  const handleCoolSelectChange = (e) => {
    const value = e.target.value;
    const newData = calculateCooling(coolData.m, coolData.h, value);
    setCoolData((prevData) => ({ ...prevData, ...newData, type: value }));
  };

  const handleHotInputChangeM = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setHotData((prevData) => ({ ...prevData, [e.target.name]: value }));
    updateHeatingResult(value, hotData.h, hotData.type);
  };

  const handleHotInputChangeH = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setHotData((prevData) => ({ ...prevData, [e.target.name]: value }));
    updateHeatingResult(hotData.m, value, hotData.type);
  };

  const handleHotSelectChange = (e) => {
    const value = e.target.value;
    const newData = calculateHeating(hotData.m, hotData.h, value);
    setHotData((prevData) => ({ ...prevData, ...newData, type: value }));
  };

  const updateCoolingResult = (m, h, type) => {
    const newData = calculateCooling(m, h, type);
    setCoolData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateHeatingResult = (m, h, type) => {
    const newData = calculateHeating(m, h, type);
    setHotData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <div className={style.container}>
      <h1>CALCULADORA DE EQUIPO</h1>
      <p>Realiza un cálculo de...</p>

      <div className={style.conForms}>
        <div className={style.conCalcCool}>
          <form>
            <h3>Calcula Tu... (1)</h3>
            <input
              type="number"
              name="m"
              placeholder="Metros cuadrados (mts²)"
              onChange={handleCoolInputChangeM}
            />
            <input
              type="number"
              name="h"
              placeholder="Altura (mts)"
              onChange={handleCoolInputChangeH}
            />
            <select onChange={handleCoolSelectChange}>
              <option value="">Tipo de Ambiente</option>
              <option value="poco">Poco frío</option>
              <hr />
              <option value="medio">Medianamente frío</option>
              <hr />
              <option value="alto">Muy frío</option>
            </select>
          </form>

          <div>
            <h5>
              Con los datos ingresados, necesitará una potencia frigorífica de:
            </h5>

            <div>
              <h3>
                <strong>{coolData.frigHr.toFixed(2)}</strong> Frig/Hr
              </h3>
              <h3>
                <strong>{coolData.btu}</strong> B.T.U.
              </h3>
            </div>
          </div>
        </div>

        <div className={style.conCalcHot}>
          <form>
            <h3>Calcula Tu... (2)</h3>
            <input
              type="number"
              name="m"
              placeholder="Metros cuadrados (mts²)"
              onChange={handleHotInputChangeM}
            />
            <input
              type="number"
              name="h"
              placeholder="Altura (mts)"
              onChange={handleHotInputChangeH}
            />
            <select onChange={handleHotSelectChange}>
              <option value="">Tipo de Ambiente</option>
              <option value="poco">Poco caluroso</option>
              <hr />
              <option value="medio">Medianamente caluroso</option>
              <hr />
              <option value="alto">Muy caluroso</option>
            </select>
          </form>

          <div>
            <h5>
              Con los datos ingresados, necesitará una potencia calórica de:
            </h5>

            <div>
              <h3>
                <strong>{hotData.kcal.toFixed(2)}</strong> Kcal
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
