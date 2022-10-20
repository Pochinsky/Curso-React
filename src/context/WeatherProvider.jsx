import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState("");
  const dataSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const requestWeather = async (dataSearch) => {
    setLoading(true);
    setNoResult("");
    try {
      const { city, country } = dataSearch;
      const appId = import.meta.env.VITE_API_KEY;
      const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
      const { data } = await axios(url1);
      const { lat, lon } = data[0];
      const url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: dataWeather } = await axios(url2);
      setResult(dataWeather);
    } catch (error) {
      setNoResult("No hay resultados");
    } finally {
      setLoading(false);
    }
  };
  return (
    <WeatherContext.Provider
      value={{ search, dataSearch, requestWeather, result, loading, noResult }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
