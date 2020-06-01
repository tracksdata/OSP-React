import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'
const ProductsFilter = () => {
    let [product, setProduct] = useState([])
    let [id, setId] = useState(2)
    let [errorMsg, setError] = useState()

    useEffect(() => {
        productsApi.getProduct(id)
            .then(response => response.data)
            .then(products => setProduct(products))
            .catch(error => {
                setError('Invalid Id Provided')
            })
    }, [id])

    function renderProducts() {

        return <li>{JSON.stringify(product)}</li>

    }

    return (
        <div>

            <h1>Filter Products</h1>
            <hr />
            <input type="text" value={id} onChange={e => setId(e.target.value)} /> <br />
            {renderProducts()}
        </div>
    );

};

export default ProductsFilter;