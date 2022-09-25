import React, { createContext, useState, useCallback } from "react";
import {
  loginService,
  signupService,
  verifyingTokenService,
} from "../services/authServices";
import Swal from "sweetalert2";
import { actualizarUsuarioService } from "../services/userServices";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  email: null,
  username: null,
  image: null,
  firstName: null,
  lastName: null,
  authStatus: false,
  loading: false,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (form) => {
    try {
      const resp = await loginService(form);
      setAuth({ ...auth, loading: true });

      if (resp.ok) {
        localStorage.setItem("token", resp.token);

        setAuth({
          id: resp.data.id,
          username: resp.data.username,
          email: resp.data.email,
          image: resp.data.image,
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          authStatus: true,
          loading: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: `error`,
        title: `Error ${error.response.status}`,
        text: error.response.data.msg,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const signup = async (form) => {
    try {
      setAuth({ ...auth, loading: true });
      const resp = await signupService(form);

      if (resp.ok) {
        localStorage.setItem("token", resp.token);

        setAuth({
          id: resp.data.id,
          username: resp.data.username,
          email: resp.data.email,
          image: resp.data.image,
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          authStatus: true,
          loading: false,
        });
      }
    } catch (error) {
      setAuth({ ...auth, loading: false });
      Swal.fire({
        icon: `error`,
        title: `Error ${error.response.status}`,
        text: error.response.data.msg,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const verifyingToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const resp = await verifyingTokenService();
        if (resp.ok) {
          localStorage.setItem("token", resp.token);

          setAuth({
            id: resp.data.id,
            username: resp.data.username,
            email: resp.data.email,
            image: resp.data.image,
            firstName: resp.data.firstName,
            lastName: resp.data.lastName,
            authStatus: true,
            loading: false,
          });
        }
      } else {
        localStorage.removeItem("token");
        setAuth({
          id: null,
          email: null,
          username: null,
          firstName: null,
          lastName: null,
          password: null,
          image: null,
          authStatus: false,
        });
      }
    } catch (error) {
      localStorage.removeItem("token");
      Swal.fire({
        icon: `error`,
        title: `Error ${error.response.status}`,
        text: error.response.data.msg,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      id: null,
      email: null,
      username: null,
      firstName: null,
      lastName: null,
      authStatus: false,
      loading: false,
    });
  };

  const actualizarUsuario = async (id, form) => {
    try {
      const resp = await actualizarUsuarioService(id, form);

      if (resp.ok) {
        setAuth({
          ...auth,
          id: resp.data.id,
          username: resp.data.username,
          email: resp.data.email,
          image: resp.data.image,
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: `error`,
        title: `Error ${error.response.status}`,
        text: error.response.data.msg,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        signup,
        verifyingToken,
        logout,
        actualizarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
