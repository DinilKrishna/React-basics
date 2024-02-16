import React from 'react'

const States = ({states}) => {
  return (
    <div>
        {states.map((state) => (
            <div className='bg-warning text-black'>
                <h2>State: {state.name}</h2>
                <h4>Language: {state.lang}</h4>
                <h4>Population: {state.population}</h4>
            </div>
        ))}    
    </div>
    
  )
}

export default States