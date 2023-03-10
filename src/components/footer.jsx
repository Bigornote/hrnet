import React from "react";
import logo from "../assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="line"></div>
      <img className="logo-footer" src={logo} alt="Logo WealthHealth" />
    </footer>
  );
};
