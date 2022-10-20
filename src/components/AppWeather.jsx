import useWeather from "../hooks/useWeather";
import FormWeather from "./FormWeather";
import Result from "./Result";
import Spinner from "./Spinner";

const AppWeather = () => {
  const { result, loading, noResult } = useWeather();
  return (
    <>
      <main className="dos-columnas">
        <FormWeather />
        {loading ? (
          <Spinner />
        ) : noResult ? (
          <p>{noResult}</p>
        ) : result?.name ? (
          <Result />
        ) : null}
      </main>
    </>
  );
};

export default AppWeather;
