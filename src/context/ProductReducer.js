const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        products: action.payload,
      };

    case "OBTENER_PRODUCTO":
      return {
        ...globalState,
        product: action.payload,
      };

    case "AGREGAR_PRODUCTO_CARRITO":
      return {
        ...globalState,
        cart: [...globalState.cart, action.payload],
      };

    case "ELIMINAR_PRODUCTO_CARRITO":
      return {
        ...globalState,
        cart: globalState.cart.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return globalState;
  }
};

export default reducer;
