import styled from "@emotion/styled";

const Container = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
	gap: 1rem;
	margin-top: 3rem;
`;

const Image = styled.img`
  display: block;
  width: 12rem;
`;

const Text = styled.p`
  font-size: 2rem;
  Price {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 2.5rem;
  Price {
    font-weight: 700;
  }
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Container>
      <Image
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen criptomoneda"
      />
      <div>
        <Price>
          El precio es de: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variacion en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
