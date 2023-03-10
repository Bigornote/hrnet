import React from "react";
import { Link } from "react-router-dom";
import img404 from "../assets/404.png";

export const Error = () => {
  return (
    <main className="main">
      <div className="error">
        <div className="img-container">
          <img src={img404} alt="a person parachuting" />
        </div>

        <h1 className="title-error">Error 404</h1>
        <p className="error-text">La page que vous demandez n'existe pas.</p>
        <button className="btn-primary">
          <Link to="/">Retournez à la page d'accueil</Link>
        </button>
      </div>
    </main>
  );
};
