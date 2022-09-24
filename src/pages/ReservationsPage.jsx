import React from "react";
import ProductForm from "../components/ProductForm";
import Title from "../components/Title";

const ReservationsPage = () => {
  return (
    <>
      <Title titulo="Reservations" />
      <main className="row">
        <article className="col">
          <ProductForm />
        </article>
      </main>
    </>
  );
};

export default ReservationsPage;
