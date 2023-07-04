import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { NavBar } from "./Header/navbar/NavBar";
import { ShortCuts } from "./Header/ShortCuts";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <div>
        <NavBar />
        <ShortCuts />
      </div>

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
