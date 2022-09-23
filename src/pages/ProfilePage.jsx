import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

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
              <h5 className="card-title">{auth.username}</h5>
              <p className="card-text">{auth.email}</p>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Editar informacion
              </button>
            </div>
          </div>
        </article>
      </main>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputUserName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUserName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputImage" className="form-label">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputImage"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
