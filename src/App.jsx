import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
    <Container>
    <Products />
    </Container>
    </>
  );
}

export default App;
