import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 1.5rem 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 1.8rem;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const useSelectCoins = (label, options) => {
  const [state, setState] = useState("");
  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectCoins];
};

export default useSelectCoins;
