import { useCallback, useMemo, useRef } from "react";
import useQuoter from "../hooks/useQuoter";
import { MARKS, PLANS } from "../constants";

const Result = () => {
  const { result, data } = useQuoter();
  const { trademark, plan, year } = data;
  const yearRef = useRef(year);
  const [nameTrademark] = useMemo(
    () => MARKS.filter((tm) => tm.id === Number(trademark)),
    [result]
  );
  const [namePlan] = useMemo(
    () => PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );
  // const [nameTrademark] = useCallback(
  //   MARKS.filter((tm) => tm.id === Number(trademark)),
  //   [result]
  // );
  // const [namePlan] = useCallback(
  //   PLANS.filter((p) => p.id === Number(plan)),
  //   [result]
  // );
  if (result === 0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nameTrademark.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total de Cotización: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;
