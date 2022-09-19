import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import Privadas from "./Privadas";
import Publicas from "./Publicas";

const AppRouter = () => {
  const { auth, verifyingToken } = useContext(AuthContext);

  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  return (
    <>
      <Router>
        <Routes>
          {auth.authStatus ? (
            <Route
              path="/*"
              element={<PrivateRoute>{<Privadas />}</PrivateRoute>}
            />
          ) : (
            <Route
              path="/*"
              element={<PublicRoute>{<Publicas />}</PublicRoute>}
            />
          )}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import CartPage from "../pages/CartPage";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import ProductPage from "../pages/ProductPage";
// import ProductsPage from "../pages/ProductsPage";
// import ProfilePage from "../pages/ProfilePage";
// import RegisterPage from "../pages/RegisterPage";

// const AppRouter = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <div className="container pt-5">
//           <Routes>
//             {/* RUTAS PRIVADAS */}
//             <Route path="/products" element={<ProductsPage />} />
//             <Route path="/products/:id" element={<ProductPage />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/profile" element={<ProfilePage />} />

//             {/* RUTAS DE AUTENTICACIÓN */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />

//             {/* RUTAS PÚBLICAS */}
//             <Route path="/" element={<HomePage />} />

//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// };

// export default AppRouter;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import CartPage from "../pages/CartPage";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import ProductPage from "../pages/ProductPage";
// import ProductsPage from "../pages/ProductsPage";
// import ProfilePage from "../pages/ProfilePage";
// import RegisterPage from "../pages/RegisterPage";

// const AppRouter = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <div className="container pt-5">
//           <Routes>
//             {/* RUTAS PRIVADAS */}
//             <Route path="/products" element={<ProductsPage />} />
//             <Route path="/products/:id" element={<ProductPage />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/profile" element={<ProfilePage />} />

//             {/* RUTAS DE AUTENTICACIÓN */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />

//             {/* RUTAS PÚBLICAS */}
//             <Route path="/" element={<HomePage />} />

//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// };

// export default AppRouter;
