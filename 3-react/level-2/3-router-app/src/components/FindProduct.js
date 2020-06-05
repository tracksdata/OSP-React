import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'

const FindProduct = () => {
    let [product, setProduct] = useState([])
    let [id, setId] = useState(1)
    let [btnId, setBtnId] = useState(1)

    useEffect(() => {
        productsApi.getProduct(btnId)
            .then(response => response.data)
            .then(products => setProduct(products))
    }, [btnId])

    let renderProducts = () => <li>{JSON.stringify(product)}</li>
    let handleClick = () => setBtnId(id);


    return (

        <div className="container">

            <h1>Find Product</h1>
            <hr />
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Find</button>
            <br />
            {renderProducts()}


        </div>
    );
};

export default FindProduct;