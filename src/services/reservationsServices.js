import axios from "axios";

// const URL_ROOT = `https://dwfs-demo-day-api.onrender.com/api/events`;
// const URL_ROOT = `http://localhost:4002/api/reservations`;
const URL_ROOT = `${process.env.REACT_APP_BACKEND_URL}/reservations`;

export const crearReservacionService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}`, form);
  return resp.data;
};

export const obtenerReservacionesService = async () => {
  const resp = await axios.get(`${URL_ROOT}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};

export const cancelarReservacionService = async (id) => {
  const resp = await axios.delete(`${URL_ROOT}/${id}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};
