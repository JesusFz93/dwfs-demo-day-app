import axios from "axios";

const URL_ROOT = `https://dwfs-demo-day-api.onrender.com/api/products`;

export const obtenerProductosService = async () => {
  const resp = await axios.get(`${URL_ROOT}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};

export const crearProductoService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}`, form, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};

export const eliminarProductoService = async (id) => {
  const resp = await axios.delete(`${URL_ROOT}/${id}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });

  return resp.data;
};

export const obtenerProductoService = async (id) => {
  const resp = await axios.get(`${URL_ROOT}/${id}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};

export const actualizarProductoService = async (id, form) => {
  const resp = await axios.put(`${URL_ROOT}/${id}`, form, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};
