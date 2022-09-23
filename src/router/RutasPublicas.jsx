import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavbarPublico from "../components/NavbarPublico";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RutasPublicas = () => {
  return (
    <>
      <NavbarPublico />
      <div className="container pt-5">
        <Routes>
          {/* Rutas exclusivamente publicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas publicas y privadas */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPublicas;
