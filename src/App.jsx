import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States';
import { Container } from 'react-bootstrap';

function App() {
  const states = [
    {name: "Kerala", lang:"Malayalam", population:1000},
    {name: "Tamil Nadu", lang:"Tamil", population:1500},
    {name: "Andhra", lang:"Telugu", population:1200},
    {name: "Karnataka", lang:"Kannada", population:1750},
    {name: "Telangana", lang:"Telugu", population:1250},
  ];
  return (
    <>
      <div className="App">
        <Container>
          <States states = {states} />
        </Container>
      </div>
    </>
  );
}


export default App
