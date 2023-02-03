import styled from "styled-components";

export const PageSection = styled.section<PageSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignCenter ? "center" : "none")};
  gap: 15px;
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

export const HorizontalBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
