import styled from "styled-components";

export const PageSection = styled.section<PageSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignCenter ? "center" : "none")};
  gap: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  height: ${(props) => (props.sm ? "30vh" : "70vh")};
  width: ${(props) => props.width};
`;

export const VerticalBox = styled.div<VerticalBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
`;

export const HorizontalBox = styled.div<HorizontalBoxProps>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap};
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
