import styled from "styled-components";

export function LoadingSpinner() {
  return <Container />;
}

const Container = styled.div`
  border: 6px solid lightgray;
  border-top: 6px black solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: spin 2s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
