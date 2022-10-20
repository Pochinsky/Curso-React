import { useState } from "react";
import useWeather from "../hooks/useWeather";

const FormWeather = () => {
  const { search, dataSearch, requestWeather } = useWeather();
  const { city, country } = search;
  const [alert, setAlert] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
    requestWeather(search);
  };
  return (
    <div className="contenedor">
      {alert && <p className="alerta">{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={dataSearch}
            value={city}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">País</label>
          <select
            name="country"
            id="country"
            onChange={dataSearch}
            value={country}
          >
            <option value="">Seleccione un país</option>
            <option value="AR">Argentina</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default FormWeather;
