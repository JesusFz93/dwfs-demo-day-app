import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const ReservationsList = () => {
  const { reservations, obtenerReservaciones, cancelarReservacion } =
    useContext(AppContext);

  useEffect(() => {
    obtenerReservaciones();
  }, [obtenerReservaciones]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Lugar</th>
          <th scope="col">Asientos</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {reservations?.map(
          ({ id, eventName, eventPlace, userSeats, eventDate }) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{eventName}</td>
              <td>{eventPlace}</td>
              <td>{userSeats}</td>
              <td>{eventDate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => cancelarReservacion(id)}
                >
                  Cancelar
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default ReservationsList;
