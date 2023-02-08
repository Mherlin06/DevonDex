import React from "react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
