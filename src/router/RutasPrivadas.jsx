import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavbarPrivado from "../components/NavbarPrivado";
import EventPage from "../pages/EventPage";
import EventsPage from "../pages/EventsPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ReservationsPage from "../pages/ReservationsPage";

const RutasPrivadas = () => {
  return (
    <>
      <NavbarPrivado />
      <div className="container pt-5">
        <Routes>
          {/* Rutas exclusivamente privadas */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />

          {/* Rutas publicas y privadas */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPrivadas;
