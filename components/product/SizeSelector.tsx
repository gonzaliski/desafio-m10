import styled from "styled-components";
import { BodyText } from "ui/texts";

export const SizeSelector = () => {
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
  return (
    <SizesContainer>
      <BodyText>Talles</BodyText>
      <SizesList>
        {sizes.map((s) => (
          <SizeItem>{s}</SizeItem>
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
const SizeItem = styled.button`
  background-color: white;
  font-size: small;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 40%;
`;
