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

  .featured__list-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
  @media (min-width: 768px) {
    .featured__list-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
