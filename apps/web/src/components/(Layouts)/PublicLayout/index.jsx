import React from "react";
import { Centralização, Layout } from "./styled";
import Header from "../../Header";
import Footer from "../../Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Centralização>
        <Layout>
          <main>{children}</main>
        </Layout>
      </Centralização>
      <Footer />
    </>
  );
};

export default PublicLayout;
