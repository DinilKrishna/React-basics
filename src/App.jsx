import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import { Container } from "react-bootstrap";
import Effects from "./components/Effects/Effects";
import MainRouter from "./components/ReactRouter/MainRouter";

function App() {
  return (
    <>
    <MainRouter/>
    </>
  );
}

export default App;
