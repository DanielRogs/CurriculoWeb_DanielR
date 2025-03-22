import React from "react";
import { Centralização, Layout } from "./styled";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Centralização>
        <Layout>
          <main>{children}</main>
        </Layout>
      </Centralização>
    </>
  );
};

export default PublicLayout;
