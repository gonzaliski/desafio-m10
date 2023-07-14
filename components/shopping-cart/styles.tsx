import Link from "next/link";
import styled from "styled-components";
import { VerticalBox, HorizontalBox } from "ui/boxes";
export const CartInformationContainer = styled(VerticalBox)`
  min-width: 300px;
`;
export const KeepBuying = styled(Link)<{ align?: alignProps }>`
  align-self: ${({ align }) => align || "initial"};
  margin-bottom: 10px;
`;

export const ShoppingCartContainer = styled(VerticalBox)`
  @media (min-width: 768px) {
    justify-content: center;
    width: 100%;
    flex-direction: row;
  }
`;

export const ItemContainer = styled(HorizontalBox)`
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2%;
  @media (min-width: 1024px) {
    min-width: 550px;
    max-width: 600px;
  }
`;
export const ProductDetail = styled(VerticalBox)`
  flex: 0 1 30%;
  @media (min-width: 768px) {
    flex: 0 1 50%;
  }
`;
export const ProductPrice = styled(VerticalBox)`
  align-items: flex-start;
  align-self: flex-end;
  width: 100px;
  gap: 4px;
`;
export const DeleteContainer = styled.div`
  cursor: pointer;
  display: flex;
  place-items: center;
  font-size: x-large;
  padding: 10px;
  height: 30%;
`;
