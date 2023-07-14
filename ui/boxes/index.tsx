import styled from "styled-components";

export const PageSection = styled.section<PageSectionProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : "initial")};
  gap: ${({ gap }) => gap || "15px"};
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: ${({ justify }) => justify || "center"};
  min-height: 70vh;
  width: ${(props) => props.width};
`;

export const VerticalBox = styled.div<VerticalBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : "center")};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
`;

export const HorizontalBox = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: space-between;
  gap: ${({ gap }) => gap};
`;

export const LongSection = styled.section<LongSectionProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100vw;
  gap: 20px;
  padding: 40px 0;
`;
export const ProductsContainer = styled(HorizontalBox)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .results-container {
    gap: 20px;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    width: 65%;
    max-width: 1200px;
    flex-wrap: wrap;
    justify-content: center;
    .results-container {
      justify-content: flex-start;
    }
  }
`;
