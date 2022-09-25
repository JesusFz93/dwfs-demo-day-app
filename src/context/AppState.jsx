import React, { useReducer, useCallback } from "react";
import AppContext from "./AppContext";
import appReducer from "./AppReducer";

import {
  obtenerEventosService,
  obtenerEventoService,
} from "../services/eventsServices";

import {
  cancelarReservacionService,
  crearReservacionService,
  obtenerReservacionesService,
} from "../services/reservationsServices";

const AppState = ({ children }) => {
  const initialState = {
    events: [],
    event: {},
    reservations: [],
  };

  const [globalState, dispatch] = useReducer(appReducer, initialState);

  const obtenerEventos = useCallback(async () => {
    try {
      const res = await obtenerEventosService();
      const eventos = res.data;

      dispatch({
        type: "OBTENER_EVENTOS",
        payload: eventos,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const obtenerEvento = useCallback(async (id) => {
    try {
      const res = await obtenerEventoService(id);
      const evento = res.data;

      dispatch({
        type: "OBTENER_EVENTO",
        payload: evento,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const crearReservacion = async (form) => {
    try {
      await crearReservacionService(form);
      await obtenerReservaciones();
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerReservaciones = useCallback(async () => {
    try {
      const res = await obtenerReservacionesService();
      const reservaciones = res.data;

      dispatch({
        type: "OBTENER_RESERVACIONES",
        payload: reservaciones,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cancelarReservacion = async (id) => {
    try {
      await cancelarReservacionService(id);
      await obtenerReservaciones();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        events: globalState.events,
        obtenerEventos,
        obtenerEvento,
        event: globalState.event,
        crearReservacion,
        obtenerReservaciones,
        reservations: globalState.reservations,
        cancelarReservacion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
