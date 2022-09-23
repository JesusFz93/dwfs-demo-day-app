import React, { createContext, useState, useCallback } from "react";
import {
  loginService,
  signupService,
  verifyingTokenService,
} from "../services/authApi";
import Swal from "sweetalert2";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  email: null,
  username: null,
  image: null,
  authStatus: false,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (form) => {
    try {
      const resp = await loginService(form);

      if (resp.ok) {
        localStorage.setItem("token", resp.token);

        setAuth({
          id: resp.data.id,
          username: resp.data.username,
          email: resp.data.email,
          image: resp.data.image,
          authStatus: true,
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
      const resp = await signupService(form);

      if (resp.ok) {
        localStorage.setItem("token", resp.token);

        setAuth({
          id: resp.data.id,
          username: resp.data.username,
          email: resp.data.email,
          image: resp.data.image,
          authStatus: true,
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
            authStatus: true,
          });
        }
      } else {
        localStorage.removeItem("token");
        setAuth({
          id: null,
          email: null,
          username: null,
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
      authStatus: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        signup,
        verifyingToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
