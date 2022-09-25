import React, { useEffect, useContext } from "react";
import ReservationForm from "../components/ReservationForm";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import ReservationsList from "../components/ReservationsList";

const ReservationsPage = () => {
  const { id } = useParams();
  const { obtenerReservaciones } = useContext(AppContext);

  useEffect(() => {
    obtenerReservaciones();
  }, [obtenerReservaciones]);

  return (
    <>
      <Title titulo="Reservations" />
      {id && (
        <main className="row">
          <article className="col">
            <ReservationForm idEvento={id} />
          </article>
        </main>
      )}
      <section className="row">
        <article className="col">
          <ReservationsList />
        </article>
      </section>
    </>
  );
};

export default ReservationsPage;
