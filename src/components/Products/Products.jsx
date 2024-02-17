import React, { useState } from 'react';
import { phonesData } from "./productData";
import { Card, Button } from 'react-bootstrap';

const Products = () => {

    const [items, setItems] = useState(phonesData);
    const decQty = (id) => {
        const newItem = items.map((item) => 
            item.id === id && item.qty > 1?{...item, qty:item.qty -1} : item
        );
        setItems(newItem)
    }
    const incQty = (id) => {
        const newItem = items.map((item) => 
            item.id === id ?{...item, qty:item.qty +1} : item
        );
        setItems(newItem)
    }
    return (
        <div>
            <h1 className="bg-info text-white">Products</h1>
            {items.map((item) => (
                <div className="d-inline-flex">
                    <Card 
                        key={item.id}
                        className='shadow p-3 m-2 bg-body rounded'
                        style={{ width: '13rem' }}>
                        <Card.Img 
                            className='p-2' 
                            style={{ width: '11rem' }}
                            variant="top" 
                            src={item.image} />
                            <Card.Body>
                                <Card.Title className='text-primary'>{item.brand}</Card.Title>
                                <Card.Text>
                                {item.model}
                                </Card.Text>
                                <h6>Price: ${item.price}</h6>
                                <p>
                                    Qty: <br />
                                    <Button onClick={()=>decQty(item.id)} className='m-1'>-</Button>{item.qty}
                                    <Button onClick={()=>incQty(item.id)} className='m-1'>+</Button><br />
                                </p>
                                <Button variant="warning">Add to Cart</Button>
                            </Card.Body>
                    </Card>
                </div>
            ))}
            
        </div>
    );
}

export default Products

