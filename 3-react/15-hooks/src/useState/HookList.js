import React, { useState } from 'react';

const HookList = () => {

    const [cartItems, addToCart] = useState([])
    const addItem = () => {
        // let item=// product object clicked by button
        let item = { id: cartItems.length, value: Math.floor(Math.random() * 100) }
        addToCart(cartItems.concat(item));
    }
    return (
        <div>
            <h1>Cart Items: {
                cartItems.map(item => {
                    return (
                        <li key={item.id}>{item.value}</li>
                    )
                })

            }

            </h1>
            <div>
                <button onClick={() => { addItem() }}>Add to Cart</button>
            </div>
        </div>
    );
};

export default HookList;