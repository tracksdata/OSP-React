import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {

    renderProducts(){
        return(
        axios.get('http://localhost:8080/api/products')
        .then(response=>response.data)
        .then(data=>{
           return data.map(product=>{
               
                   {product.name}
               
               
           })
            
        })

       )
}

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default Products;