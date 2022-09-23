import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavbarPrivado from "../components/NavbarPrivado";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const RutasPrivadas = () => {
  return (
    <>
      <NavbarPrivado />
      <div className="container pt-5">
        <Routes>
          {/* Rutas exclusivamente privadas */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* Rutas publicas y privadas */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPrivadas;
