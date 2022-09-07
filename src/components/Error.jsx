import styled from "@emotion/styled";

const Text = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 1.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Error;
