import React, { createContext, useState, useCallback } from "react";
import {
  loginService,
  signupService,
  verifyingTokenService,
} from "../services/authApi";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  email: null,
  username: null,
  password: null,
  authStatus: false,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (form) => {
    const resp = await loginService(form);

    if (resp.ok) {
      localStorage.setItem("token", resp.token);

      setAuth({
        id: resp.data.id,
        username: resp.data.username,
        email: resp.data.email,
        password: resp.data.rol,
        authStatus: true,
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
          password: resp.data.rol,
          authStatus: true,
        });
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const verifyingToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const resp = await verifyingTokenService();
      if (resp.ok) {
        localStorage.setItem("token", resp.token);

        setAuth({
          id: resp.data.id,
          username: resp.data.username,
          email: resp.data.email,
          password: resp.data.rol,
          authStatus: true,
        });
      }
    } else {
      console.log("verifyingToken, no hubo token");
      setAuth({
        id: null,
        email: null,
        username: null,
        password: null,
        authStatus: false,
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      id: null,
      email: null,
      username: null,
      password: null,
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
