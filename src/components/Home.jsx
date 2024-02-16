import React from 'react'
import Childcomponent from './Childcomponent'
import './Home.css';

const Home = () => {
    const headStyle = {color : "green"}
  return (
    <div className='home'>
        <h1>Home Component</h1>
        <Childcomponent />
    </div>
  )
}

export default Home