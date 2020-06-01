import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'

const FIlterProductsByName = () => {
    let [products, setProducts] = useState([])
    let [name, setName] = useState('a')
    let [errorMsg, setError] = useState()

    useEffect(() => {
        productsApi.getProductsByName(name)

            .then(response => response.data)
            .then(products => setProducts(products))
            .catch(error => {
                setError('Invalid Product name Provided')
            })
    }, [name])

    function renderProducts() {
        console.log('Name: ' + name);

        return products.map((product, index) => {
            return <li key={index}>{JSON.stringify(product)}</li>
        })


    }

    return (
        <div>

            <h1>Filter Products By Name</h1>
            <hr />
           Product Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /> <br />
            {renderProducts()}
        </div>
    );

};

export default FIlterProductsByName;