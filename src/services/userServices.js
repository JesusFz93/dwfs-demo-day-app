import axios from "axios";

const URL_ROOT = `https://dwfs-demo-day-api.onrender.com/api/users`;
// const URL_ROOT = `http://localhost:4002/api/users`;

export const actualizarUsuarioService = async (id, form) => {
  const resp = await axios.put(`${URL_ROOT}/${id}`, form, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  return resp.data;
};
