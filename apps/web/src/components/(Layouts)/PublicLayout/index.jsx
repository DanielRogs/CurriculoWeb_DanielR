import React from "react";
import { Centralização, Layout } from "./styled";
import Header from "../../Header";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Centralização>
        <Layout>
          <main>{children}</main>
        </Layout>
      </Centralização>
    </>
  );
};

export default PublicLayout;
