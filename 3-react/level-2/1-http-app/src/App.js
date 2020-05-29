import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { getProducts } from './actions/products.js'
import axios from 'axios';


class App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        this.setState({ products: response.data })
      })
  }
  
  renderProducts() {

    /*
     getProducts().then(response => {
      return  response.data.map((product, index) => {
        return <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
        </tr>
      })
    })


*/





    let { products } = this.state;
    //console.log(products);
    return products.map((product, index) => {

      return <tr key={index}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
      </tr>



    })

  }

  render() {
    return (
      <div className="container">

        <div className="col-10 col-md-8 col-lg-6">

          <div className="card">
            <div className="card-header bg-primary">Product Data</div>
            <div className="card-body">
              <table className="table table-small">

                <tbody>
                  <tr>
                    <th>Produt Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                  </tr>
                </tbody>



                <tbody>
                  {this.renderProducts()}
                </tbody>

              </table>

            </div>

          </div>

        </div>



      </div>
    );
  }
}

export default App;