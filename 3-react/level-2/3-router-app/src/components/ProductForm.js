import React, { useState, useRef } from 'react';
import productsApi from '../api/Products'

const ProductForm = () => {

    let [product, setProduct] = useState({})
    let id = useRef({})
    let name = useRef({})
    let price = useRef({})
    let description = useRef({})



    function handleProduct(e) {
        e.preventDefault();
        let product={
            id:id.current.value, 
            name:name.current.value,
            price:price.current.value,
            description:description.current.value
        }
        
        console.log(product);
        productsApi.saveProduct(product)
        .then(response => response.data)
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.log(error);

        })

    }

    function addProduct(e, field) {

        let fieldValue = e.target.value;
        setProduct({ ...product, [field]: fieldValue })


        /*
        let product={
            id:id.current.value, 
            name:name.current.value,
            price:price.current.value,
            description:description.current.value
        }
        */

        // let product={ id: e.target.id.value, name: e.target.name.value, price: e.target.price.value, description: e.target.description.value }
        // setProduct({ id: e.target.id.value, name: e.target.name.value, price: e.target.price.value, description: e.target.description.value })

        // console.log(product);



        /*
                productsApi.saveProduct(product)
                    .then(response => response.data)
                    .then(product => {
                        console.log(product);
                    })
                    .catch(error => {
                        console.log(error);
        
                    })

    */




    }



    return (
        <div>
            <h1>Product Form</h1> <br />

            <form onSubmit={e => handleProduct(e)}>

                Id: <input ref={id} onChange={e => addProduct(e, 'id')} /> <br />
                Name:<input ref={name} onChange={e => addProduct(e, 'name')} /> <br />
                Desc:<input ref={description} onChange={e => addProduct(e, 'description')} /> <br />
                Price:<input ref={price} onChange={e => addProduct(e, 'price')} /><br />
                <button>Save Product</button>

            </form>

        </div>
    );
};

export default ProductForm;