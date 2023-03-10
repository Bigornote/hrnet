import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Error } from "./pages/Error";
import { CreateEmployee } from "./pages/CreateEmployee";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/list-employee" element={<List />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
