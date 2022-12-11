import styled from "styled-components";

export const MainButton = styled.button`
  max-width: 250px;
  min-width: 90px;
  width: 100%;
  max-height: 45px;
  border-radius: 10px;
  border-style: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  font-family: "Roboto";
  padding: 10px;
  background-color: var(--secondary-color);
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    filter: brightness(89%);
    transition: all 0.5s ease-out;
  }
`;

export const SecondaryButton = styled(MainButton)`
  background-color: var(--tertiary-comp-color);
`;

export const TertiaryButton = styled(MainButton)`
  background-color: var(--black-main);
`;

export const BorderButton = styled(MainButton)`
  background-color: transparent;
  border: 3px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: 800;
  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transition: all 0.5s ease-out;
  }
`;
