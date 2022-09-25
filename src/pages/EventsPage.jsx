import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  const { events, obtenerEventos } = useContext(AppContext);

  useEffect(() => {
    obtenerEventos();
  }, [obtenerEventos]);

  return (
    <>
      <main className="row pt-5">
        <article className="col">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </article>
      </main>
    </>
  );
};

export default EventsPage;
