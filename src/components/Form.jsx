import { Fragment } from "react";
import { MARKS, YEARS, PLANS } from "../constants";
import useQuoter from "../hooks/useQuoter";
import Error from "../components/Error";

const Form = () => {
  const { data, handleChangeData, error, setError, quoteInsurance } =
    useQuoter();
  const { trademark, year } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate data
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    // quote
    quoteInsurance();
  };
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            className="block mb-3 font-bold text-gray-600 uppercase"
            htmlFor="trademark"
          >
            Marca
          </label>
          <select
            id="trademark"
            name="trademark"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeData(e)}
            value={trademark}
          >
            <option value=""> -- Seleleccione una marca -- </option>
            {MARKS.map((mark) => (
              <option key={mark.id} value={mark.id}>
                {mark.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            className="block mb-3 font-bold text-gray-600 uppercase"
            htmlFor="year"
          >
            Año
          </label>
          <select
            id="year"
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeData(e)}
            value={year}
          >
            <option value=""> -- Seleleccione un año -- </option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            className="block mb-3 font-bold text-gray-600 uppercase"
            htmlFor="plan"
          >
            Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="name">{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  id="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-400 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        />
      </form>
    </>
  );
};

export default Form;
