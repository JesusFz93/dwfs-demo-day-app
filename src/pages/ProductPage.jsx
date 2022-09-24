import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

import { NavLink, useParams } from "react-router-dom";
import { obtenerProductoApi } from "../apis/productsApi";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const obtenerProducto = async () => {
      const resp = await obtenerProductoApi(id);
      setProduct(resp.data.data);
    };
    obtenerProducto();
  }, [id]);

  return (
    <>
      <Title titulo="Informacion del producto" />
      <section className="row pt-5">
        <article className="col-12">
          <NavLink className="btn btn-dark" to="/products">
            Regresar
          </NavLink>
        </article>
      </section>
      <main className="row pt-5">
        <ProductCard {...product} action="edit" />
        <article className="col-md-8">
          <p>Comprar con nosotros es muy facil</p>
        </article>
      </main>
    </>
  );
};

export default ProductPage;
