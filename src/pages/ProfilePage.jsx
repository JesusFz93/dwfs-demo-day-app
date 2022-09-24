import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";
import EditUserModal from "../components/EditUserModal";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Title titulo="Perfil del usuario" />
      <main className="row ">
        <article className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={auth.image}
              className="card-img-top"
              alt={auth.username}
            />
            <div className="card-body">
              <h5 className="card-title">Usuario: {auth.username}</h5>
              <p className="card-text">Correo: {auth.email}</p>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#editUserModal"
              >
                Editar informacion
              </button>
            </div>
          </div>
        </article>
      </main>
      <EditUserModal />
    </>
  );
};

export default ProfilePage;
