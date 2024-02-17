import React, { useState } from 'react';
// import '../components/Header.css'
import {Button, Table} from 'react-bootstrap';

const Header = () => {
  
  const [color, setColor] =  useState("Green");
  const [count, setCount] =  useState(0);
  const changeColor = () =>{
    setColor("Red");
  }
  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    setCount(count - 1);
  }
  const onCHangeHandler =() => {
    alert('sadfghjkl')
  }

  return (
    <>
    <h1 className="bg-warning text-white">useState Hook in</h1>
    <h2>my Favourite color is {color}</h2>
    <Button onClick={changeColor}>Change Color</Button>
    <h1>Counter is {count}</h1>
    <input onChange={onCHangeHandler} type="text" />
    <Button className='m-2 bg-success' onClick={increment}> + </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button className='m-2 bg-danger' onClick={decrement}> - </Button>

    </>
  )
}

export default Header