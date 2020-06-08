import React, { useEffect, useState } from 'react';

import productsApi from '../api/Products'




const Product = (props) => {
    let [product, setProduct] = useState({})

    useEffect(() => {
        productsApi.getProduct(props.match.params.id)
            .then(response => response.data)
            .then(product => setProduct(product))
    }, [])

    function renderProduct() {
        return (
            <div>


                <table className="table table-dark">
                    <tr>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </thead>
                    </tr>
                    <tr>
                        <tbody>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tbody>

                    </tr>
                </table>


            </div>
        )
    }

    return (

        <div>
            {renderProduct()}

        </div>
    );
};

export default Product;