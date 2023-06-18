import styled from "styled-components";

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 10px;
  max-width: 350px;
  max-height: 40px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  overflow: hidden;
`;

export const SearchInput = styled(Input)`
  height: 35px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:focus {
    outline-color: black;
  }
`;
