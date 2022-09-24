import React, { useReducer, useCallback } from "react";
import AppContext from "./AppContext";
import appReducer from "./AppReducer";

import {
  obtenerEventosService,
  obtenerEventoService,
} from "../services/eventsServices";

const AppState = ({ children }) => {
  const initialState = {
    events: [],
    event: {},
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
    console.log("sadass");
    try {
      const res = await obtenerEventoService(id);
      const evento = res.data;
      console.log(evento);

      dispatch({
        type: "OBTENER_EVENTO",
        payload: evento,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        events: globalState.events,
        obtenerEventos,
        obtenerEvento,
        event: globalState.event,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
