import axios from "axios";

// const URL_ROOT = `https://demo-api-2.onrender.com/api/products`;
const URL_ROOT = `http://localhost:4002/api/events`;

export const obtenerEventosService = async () => {
  const resp = await axios.get(`${URL_ROOT}`);

  return resp.data;
};

export const obtenerEventoService = async (id) => {
  const resp = await axios.get(`${URL_ROOT}/${id}`);

  return resp.data;
};
