import React, { useState } from 'react'

const products = [
    {id:1, name: "Laptop", brand: "DELL", qty:1},
    {id:2, name: "Laptop", brand: "HP", qty:1},
    {id:3, name: "Laptop", brand: "Lenovo", qty:1},
    {id:4, name: "Laptop", brand: "Apple", qty:1},
]

const keys = () => {
    const [items, setItem] = useState(products);

    const changeQty = (id) => {
        const newItem = items.map((item)=>
        item.id === id?{...item, qty: item.qty + 1}:item
        );
        setItem(newItem);
    }
  return (
    <div>
        {items.map((product)=>(
            <div className='bg-success text-white m-2' key={product.id}>
                <h2>{product.name}</h2>
                <h3>Brand : {product.brand}</h3>
                <h4>Qty : {product.qty}</h4>
                <button onClick={()=> changeQty(product.id)} type="button">+</button><br />
                ____________________________
            </div>
        ))}
        
    </div>
  )
}

export default keys