import axios from "axios";

// const URL_ROOT = `https://dwfs-demo-day-api.onrender.com/api/events`;
// const URL_ROOT = `http://localhost:4002/api/events`;
const URL_ROOT = `${process.env.REACT_APP_BACKEND_URL}/events`;

export const obtenerEventosService = async () => {
  const resp = await axios.get(`${URL_ROOT}`);

  return resp.data;
};

export const obtenerEventoService = async (id) => {
  const resp = await axios.get(`${URL_ROOT}/${id}`);

  return resp.data;
};
