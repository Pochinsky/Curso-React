import { WeatherProvider } from "./context/WeatherProvider";
import AppWeather from "./components/AppWeather";

const App = () => (
  <WeatherProvider>
    <header>
      <h1>Consulta el Clima</h1>
    </header>
    <AppWeather />
  </WeatherProvider>
);

export default App;
