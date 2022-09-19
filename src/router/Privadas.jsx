import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarPrivado from "../components/NavbarPrivado";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const Privadas = () => {
  return (
    <>
      <NavbarPrivado />
      <div className="container pt-5">
        <Routes>
          {/* RUTAS PRIVADAS */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default Privadas;
