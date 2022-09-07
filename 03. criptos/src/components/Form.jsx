import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCoins from "../hooks/useSelectCoins";
import Error from "./Error";
import { coins } from "../data/coins";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  margin-top: 3rem;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCoins }) => {
  const [error, setError] = useState(false);
  const [criptocoins, setCriptocoins] = useState([]);
  const [coin, SelectCoins] = useSelectCoins("Elige tu Moneda", coins);
  const [criptocoin, SelectCriptocoins] = useSelectCoins(
    "Elige tu Criptomoneda",
    criptocoins
  );
  useEffect(() => {
    const requestAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();
      const arrayCriptos = result.Data.map((cripto) => {
        const object = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
        return object;
      });
      setCriptocoins(arrayCriptos);
    };
    requestAPI();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, criptocoin].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCoins({ coin, criptocoin });
  };
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCriptocoins />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Form;
