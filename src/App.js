import React from "react";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import AppState from "./context/AppState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <AuthProvider>
      <AppState>
        <AppRouter />
      </AppState>
    </AuthProvider>
  );
};

export default App;
