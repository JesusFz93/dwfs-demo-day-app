import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  place,
  category,
  image,
  price,
  seats,
  fecha,
  available,
}) => {
  return (
    <div className="col" key={id}>
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <p className="card-text">
            <strong>Lugar:</strong> {place}
          </p>
          <p className="card-text">
            <strong>Categoria:</strong> {category}
          </p>
          <p className="card-text">
            <strong>Precio:</strong> {price}
          </p>
          <p className="card-text">
            <strong>Asientos disponibles:</strong> {seats}
          </p>
          <p className="card-text">
            <strong>Fecha:</strong> {fecha}
          </p>

          <div className="d-flex justify-content-between">
            <small className="text-muted">
              <NavLink className="btn btn-info" to={`/events/${id}`}>
                Ver mas...
              </NavLink>
            </small>
            <small className="text-muted">
              {available ? (
                <button className="btn btn-success">Reservar</button>
              ) : (
                <button className="btn btn-danger" disabled>
                  AGOTADO
                </button>
              )}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
