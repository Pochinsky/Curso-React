import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Result from "./components/Result";
import CriptoImage from "./img/imagen-criptos.png";
import Spinner from "./components/Spinner";

/* Creating a styled component. */
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 8rem;
  margin-bottom: 5rem;
  font-size: 3.2rem;
  &::after {
    content: "";
    width: 10rem;
    height: 0.6rem;
    background-color: #66a2fe;
    display: block;
    margin: 1rem auto 0 auto;
  }
`;

/* Creating a styled component. */
const Container = styled.div`
  max-width: 90rem;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

/* Creating a styled component. */
const Image = styled.img`
  max-width: 40rem;
  width: 80%;
  margin: 10rem auto 0 auto;
  display: block;
`;

const App = () => {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [charge, setCharge] = useState(false);
  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const quoteCriptocoin = async () => {
        setCharge(true);
        setResult({});
        const { coin, criptocoin } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result.DISPLAY[criptocoin][coin]);
        setCharge(false);
      };
      quoteCriptocoin();
    }
  }, [coins]);
  return (
    <Container>
      <Image src={CriptoImage} alt="imagenes criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form setCoins={setCoins} />
        {charge && <Spinner />}
        {result.PRICE && <Result result={result} />}
      </div>
    </Container>
  );
};

export default App;
