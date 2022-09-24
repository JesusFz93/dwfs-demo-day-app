import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const initialState = {
  email: "",
  username: "",
  password: "",
  image: "",
  firstName: "",
  lastName: "",
};

const EditUserModal = () => {
  const { auth, actualizarUsuario } = useContext(AuthContext);
  const [userForm, setUserForm] = useState(initialState);

  const editarProducto = async () => {
    await actualizarUsuario(auth.id, userForm);
  };

  const handleFieldChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setUserForm({
      email: auth.email,
      username: auth.username,
      image: auth.image,
      firstName: auth.firstName,
      lastName: auth.lastName,
      password: "",
    });
  }, [auth]);

  return (
    <div
      className="modal fade"
      id="editUserModal"
      tabIndex={-1}
      aria-labelledby="editUserModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editUserModalLabel">
              Editar usuario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="userEmail"
                name="email"
                value={userForm.email}
                onChange={handleFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userUserName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userUserName"
                name="username"
                value={userForm.username}
                onChange={handleFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userFirstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="userFirstName"
                name="firstName"
                value={userForm.firstName}
                onChange={handleFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userLastName" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="userLastName"
                name="lastName"
                value={userForm.lastName}
                onChange={handleFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                name="password"
                value={userForm.password}
                onChange={handleFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userImage" className="form-label">
                Imagen
              </label>
              <input
                type="text"
                className="form-control"
                id="userImage"
                name="image"
                value={userForm.image}
                onChange={handleFieldChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
              onClick={editarProducto}
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
