const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_EVENTOS":
      return {
        ...globalState,
        events: action.payload,
      };

    case "OBTENER_EVENTO":
      return {
        ...globalState,
        event: action.payload,
      };

    case "OBTENER_RESERVACIONES":
      return {
        ...globalState,
        reservations: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
