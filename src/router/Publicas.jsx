import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarPublico from "../components/NavbarPublico";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Publicas = () => {
  return (
    <>
      <NavbarPublico />
      <div className="container pt-5">
        <Routes>
          {/* RUTAS DE AUTENTICACIÓN */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default Publicas;
