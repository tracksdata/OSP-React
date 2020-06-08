import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'
import { Link } from 'react-router-dom';
const FindProductForm = () => {
    let [products, setProducts] = useState([])
    let [name, setName] = useState('')


    useEffect(() => {
        if (products.length === 0) {
            productsApi.getProducts()
                .then(response => response.data)
                .then(products => setProducts(products))

        }
        productsApi.getProductsByName(name)
            .then(response => response.data)
            .then(products => setProducts(products))
    }, [name])

    let renderProducts = () => {
        return products.map((product, index) => {

            return <tr>
                <td> <Link to={`/findProduct/${product.id}`}>{product.id}</Link></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>

        })
    }


    return (
        <div>

            <input class="form-control" placeholder="Type your product name here" type="text" value={name} onChange={e => setName(e.target.value)} />

            <br />
            <div className="card">
                <div className="card-header">Products</div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Descriptiin</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderProducts()}
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    );
};

export default FindProductForm;