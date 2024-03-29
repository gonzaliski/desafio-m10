import styled from "styled-components";

export const MainButton = styled.button<MainButtonProps>`
  cursor: pointer;
  text-transform: uppercase;
  max-width: 350px;
  min-width: 90px;
  width: ${(props) => props.size || "100%"};
  max-height: 45px;
  border-radius: 15px;
  border-style: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  font-family: "Roboto";
  padding: 15px 10px 15px 10px;
  background-color: var(--secondary-color);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    filter: brightness(140%);
    transition: all 0.5s ease-out;
  }
  &:disabled {
    pointer-events: none;
    background-color: gray;
  }
`;

export const SecondaryButton = styled(MainButton)`
  background-color: var(--primary-comp-color);
`;

export const TertiaryButton = styled(MainButton)`
  background-color: var(--black-main);
  max-width: 450px;
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
export const SearchButton = styled.button`
  border-style: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 35px;
  border: none;
  font-size: 20px;
  display: flex;
  place-items: center;
  background-color: white;
  color: black;
`;
