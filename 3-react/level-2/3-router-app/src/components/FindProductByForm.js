import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'
import { Link } from 'react-router-dom';
const FindProductByForm = () => {
    let [product, setProducts] = useState([])
    let [id, setId] = useState()


    useEffect(() => {

        productsApi.getProduct(id)
            .then(response => response.data)
            .then(product => setProducts(product))
    }, [id])

    let renderProducts = () => {


        return <tr>
            <td> <Link to={`/findProduct/${product.id}`}>{product.id}</Link></td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
        </tr>


    }


    return (
        <div>

            <div className="col-4">
                <input class="form-control" placeholder="Type your product name here" type="text" value={id} onChange={e => setId(e.target.value)} />

            </div>


            <div className="col-5 mt-4">
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
        </div>
    );
};

export default FindProductByForm;