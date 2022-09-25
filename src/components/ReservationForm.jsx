import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const initForm = {
  userId: "",
  eventName: "",
  eventPlace: "",
  eventDate: "",
  eventSeats: 0,
  userSeats: "",
};

const ReservationForm = ({ idEvento }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initForm);
  const { auth } = useContext(AuthContext);
  const { event, obtenerEvento, crearReservacion } = useContext(AppContext);

  const handleForm = async (e) => {
    e.preventDefault();

    await crearReservacion({ ...form, userSeats: parseInt(form.userSeats) });
    navigate("/reservations");
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (idEvento) {
      setForm({
        userId: auth.id,
        eventName: event.name,
        eventPlace: event.place,
        eventDate: event.fecha,
        eventSeats: event.seats,
        userSeats: "",
      });
    }
  }, [auth, event, idEvento]);

  useEffect(() => {
    if (idEvento) {
      obtenerEvento(idEvento);
    }
  }, [idEvento, obtenerEvento]);

  return (
    <form className="w-100" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="inputUserId" className="form-label">
          Id Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="inputUserId"
          name="userId"
          value={form.userId}
          onChange={cambio}
          disabled
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputeventName" className="form-label">
          Nombre del evento
        </label>
        <input
          type="text"
          className="form-control"
          id="inputeventName"
          name="eventName"
          value={form.eventName}
          onChange={cambio}
          disabled
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEventPlace" className="form-label">
          Lugar del evento
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEventPlace"
          name="eventPlace"
          value={form.eventPlace}
          onChange={cambio}
          disabled
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEventDate" className="form-label">
          Fecha del evento
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEventDate"
          name="eventDate"
          value={form.eventDate}
          onChange={cambio}
          disabled
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEventSeats" className="form-label">
          Asientos disponibles
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEventSeats"
          name="eventSeats"
          value={form.eventSeats}
          onChange={cambio}
          disabled
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputUserSeats" className="form-label">
          Asientos deseados
        </label>
        <input
          type="text"
          className="form-control"
          id="inputUserSeats"
          name="userSeats"
          value={form.userSeats}
          onChange={cambio}
        />
      </div>
      <div className="mb-3 text-end">
        <button type="submit" className="btn btn-success">
          Reservar
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
