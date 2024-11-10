import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
