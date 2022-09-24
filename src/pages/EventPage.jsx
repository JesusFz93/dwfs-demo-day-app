import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { NavLink, useParams } from "react-router-dom";
// import EventCardView from "../components/EventCardView";

const EventPage = () => {
  const { id } = useParams();
  const { event, obtenerEvento } = useContext(AppContext);

  useEffect(() => {
    obtenerEvento(id);
  }, [id, obtenerEvento]);

  return (
    <>
      <section className="row pt-5">
        <article className="col-12">
          <NavLink className="btn btn-dark" to="/events">
            Regresar
          </NavLink>
        </article>
      </section>
      <main className="row py-5">
        <article className="col-md-6">
          <img src={event.image} className="card-img" alt={event.name} />
        </article>
        <article className="col-md-6">
          <h1 className="fs-1">{event.name}</h1>
          <p className="fs-3">
            <strong>Lugar:</strong> {event.place}
          </p>
          <p className="fs-3">
            <strong>Categoria:</strong> {event.category}
          </p>
          <p className="fs-3">
            <strong>Precio:</strong> {event.price}
          </p>
          <p className="fs-3">
            <strong>Asientos disponibles:</strong> {event.seats}
          </p>
          <p className="fs-3">
            <strong>Fecha:</strong> {event.fecha}
          </p>

          <div className="d-grid">
            {event.available ? (
              <button className="btn btn-success">Reservar</button>
            ) : (
              <button className="btn btn-danger" disabled>
                AGOTADO
              </button>
            )}
          </div>
        </article>
      </main>
    </>
  );
};

export default EventPage;
