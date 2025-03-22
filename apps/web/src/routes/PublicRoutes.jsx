// IMPORTAÇÕES ESSENCIAIS:
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/constans";
import PublicLayout from "../components/(Layouts)/PublicLayout";

// IMPORTAÇÃO DE PÁGINAS:
import HomePage from "../pages/(public)/HomePage";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path={ROUTES.MAIN} element={<HomePage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
