import { createContext, useState } from "react";
import {
  calculatePlan,
  calculateTrademark,
  formatMoney,
  getYearsDifference,
} from "../helpers";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    trademark: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [load, setLoad] = useState(false);
  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const quoteInsurance = () => {
    // define base
    let result = 2000;
    // get difference between years
    const difference = getYearsDifference(data.year);
    // sustract 3% by year
    result -= difference * 0.03 * result;
    // European 30%
    // American 15%
    // Asiatic 5%
    result *= calculateTrademark(data.trademark);
    // basic 20%
    // complete 50%
    result *= calculatePlan(data.plan);
    // format Money
    result = formatMoney(result);
    setLoad(true);
    setTimeout(() => {
      setResult(result);
      setLoad(false);
    }, 3000);
  };
  return (
    <QuoterContext.Provider
      value={{
        handleChangeData,
        data,
        error,
        setError,
        quoteInsurance,
        result,
        load,
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };

export default QuoterContext;
