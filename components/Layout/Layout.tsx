import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { NavBar } from "./Header/NavBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <NavBar />
      {children}
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
