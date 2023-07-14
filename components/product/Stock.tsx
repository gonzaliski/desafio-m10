import styled from "styled-components";
import { HorizontalBox } from "ui/boxes";
import { XSmTextBold } from "ui/texts";

export const Stock = ({ available }: { available: boolean }) => {
  return (
    <StockContainer isAvailable={available}>
      <XSmTextBold>{available ? "STOCK" : "SIN STOCK"}</XSmTextBold>
    </StockContainer>
  );
};
const StockContainer = styled(HorizontalBox)<{ isAvailable: boolean }>`
  background-color: ${({ isAvailable }) =>
    isAvailable ? "var(--success)" : "var(--disabled)"};
  border-radius: 5px;
  padding: 5px;
  width: max-content;
  max-width: 90px;
  color: white;
`;
