import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

const initForm = {
  email: "",
  username: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);
  const { auth, signup } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    await signup(form);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title titulo="Registro" />
      <section className="row">
        <article className="col">
          <p className="text-center">{auth.id}</p>
        </article>
      </section>
      <main className="row pt-5">
        <article className="col d-flex justify-content-center align-items-center">
          <form className="w-50" onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={form.email}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                name="username"
                value={form.username}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputPassword"
                value={form.password}
                onChange={cambio}
              />
            </div>
            <div className="mb-3 text-end">
              <button
                type="submit"
                className="btn btn-success"
                disabled={auth.loading}
              >
                {auth.loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Registrar"
                )}
              </button>
            </div>
          </form>
        </article>
      </main>
    </>
  );
};

export default RegisterPage;
