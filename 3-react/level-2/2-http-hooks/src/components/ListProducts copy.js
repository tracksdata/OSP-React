import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'

const ListProducts = () => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getProducts()
            .then(response => response.data)
            .then(products => setProducts(products))
    }, [])

    function renderProducts() {
        return products.map((product, index) => {
            return <li>{JSON.stringify(product)}</li>
        })
    }

    return (

        <div className="container">

            <h1>List Products</h1>
            <hr />
            {renderProducts()}


        </div>
    );
};

export default ListProducts;