import axios from "axios";

// const URL_ROOT = `https://demo-api-2.onrender.com/api/auth`;
const URL_ROOT = `http://localhost:4002/api/auth`;

export const loginService = async (data) => {
  const resp = await axios.post(`${URL_ROOT}/login`, data);
  return resp.data;
};

export const signupService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}`, form);
  return resp.data;
};

export const verifyingTokenService = async () => {
  const resp = await axios.get(`${URL_ROOT}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });

  return resp.data;
};
