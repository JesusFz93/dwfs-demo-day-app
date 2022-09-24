import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import ProductCard from "../components/ProductCard";

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
              <ProductCard key={event.id} {...event} />
              // <p>Elementos</p>
            ))}
          </div>
        </article>
      </main>
    </>
  );
};

export default EventsPage;
