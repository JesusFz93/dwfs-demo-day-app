import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Title titulo="Perfil del usuario" />
      <main className="row">
        <article className="col">
          <h2>{auth.id}</h2>
          <p>{auth.username}</p>
          <p>{auth.email}</p>
        </article>
      </main>
    </>
  );
};

export default ProfilePage;
