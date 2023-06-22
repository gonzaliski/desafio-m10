import { useState } from "react";
import styled from "styled-components";
import { MdText } from "ui/texts";

export const SizeSelector = ({ onChange }: SizeSelectorProps) => {
  const [selected, setSelected] = useState("");
  const sizesAvaiable = [
    "40",
    "40.5",
    "41",
    "41.5",
    "42",
    "42.5",
    "43",
    "43.5",
    "44",
    "44.5",
  ];
  const sizes = [
    "37",
    "37.5",
    "38",
    "38.5",
    "39",
    "39.5",
    "40",
    "40.5",
    "41",
    "41.5",
    "42",
    "42.5",
    "43",
    "43.5",
    "44",
    "44.5",
    "45",
    "45.5",
    "46",
    "46.5",
  ];
  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };
  return (
    <SizesContainer>
      <MdText>Talles</MdText>
      <SizesList>
        {sizes.map((value, index) => (
          <SizeItem
            disabled={!sizesAvaiable.includes(value)}
            onClick={() => handleChange(value)}
            active={value == selected}
            key={index}
          >
            {value}
          </SizeItem>
        ))}
      </SizesList>
    </SizesContainer>
  );
};

const SizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: auto;
`;
const SizesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const SizeItem = styled.button<{ active: boolean }>`
  cursor: pointer;
  background-color: ${({ active }) => (active ? "black" : "white")};
  color: ${({ active }) => (active ? "white" : "initial")};
  font-size: small;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 40%;
  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;
