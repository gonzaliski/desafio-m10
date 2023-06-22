import styled from "styled-components";
import { VerticalBox } from "ui/boxes";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const FormItems = styled(VerticalBox)`
  min-width: 250px;
  width: 100%;
  max-width: 450px;
`;
