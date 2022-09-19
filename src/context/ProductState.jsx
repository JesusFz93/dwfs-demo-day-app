import React, { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";

import {
  obtenerProductosService,
  crearProductoService,
  eliminarProductoService,
  obtenerProductoService,
  actualizarProductoService,
} from "../services/productServices";

const ProductState = ({ children }) => {
  const initialState = {
    products: [],
    product: {
      id: "",
      name: "",
      description: "",
      price: "",
    },
    cart: [],
  };

  const [globalState, dispatch] = useReducer(productReducer, initialState);

  // const seleccionarProducto = async (id) => {
  //   try {
  //     dispatch({
  //       type: "SELECCIONAR_PRODUCTO",
  //       payload: id,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const obtenerProductos = useCallback(async () => {
    try {
      const res = await obtenerProductosService();
      const productos = res.data.map((obj) => {
        return {
          id: obj._id,
          name: obj.name,
          description: obj.description,
          price: obj.price,
        };
      });

      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: productos,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const crearProducto = async (form) => {
    try {
      await crearProductoService(form);

      await obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await eliminarProductoService(id);

      await obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProducto = useCallback(async (id) => {
    try {
      const res = await obtenerProductoService(id);
      const producto = {
        id: res.data._id,
        name: res.data.name,
        description: res.data.description,
        price: res.data.price,
      };

      dispatch({
        type: "OBTENER_PRODUCTO",
        payload: producto,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const actualizarProducto = async (id, form) => {
    try {
      await actualizarProductoService(id, form);

      await obtenerProducto(id);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProductoCarrito = (product) => {
    try {
      const productoEncontrado = globalState.cart.find(
        (producto) => producto.id === product.id
      );

      if (!productoEncontrado) {
        dispatch({
          type: "AGREGAR_PRODUCTO_CARRITO",
          payload: product,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProductoCarrito = async (id) => {
    try {
      dispatch({
        type: "ELIMINAR_PRODUCTO_CARRITO",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        obtenerProductos,
        crearProducto,
        actualizarProducto,
        eliminarProducto,
        product: globalState.product,
        obtenerProducto,
        cart: globalState.cart,
        agregarProductoCarrito,
        eliminarProductoCarrito,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
