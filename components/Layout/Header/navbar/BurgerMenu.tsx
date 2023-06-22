import { useState } from "react";
import styled from "styled-components";

export const BurgerMenu = ({ onOpen }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    onOpen(!open);
  };

  return (
    <BurgerMenuContainer open={open} onClick={handleClick}>
      <div />
      <div />
      <div />
    </BurgerMenuContainer>
  );
};

const BurgerMenuContainer = styled.div<BurgerMenuContainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9000;
  cursor: pointer;
  div {
    background-color: white;
    margin-bottom: 4px;
    width: 2rem;
    height: 4px;
    border-radius: 10px;
    transform-origin: 0.25rem;
    transition: all 0.3s linear;
    z-index: 20;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-44deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
