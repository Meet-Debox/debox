// import React, { ReactNode, ReactPortal } from "react";
import Header from "./Header.js";
import Footer from "../reusable/Footer";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
