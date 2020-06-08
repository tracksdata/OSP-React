import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductForm from './components/ProductForm';
import ListProducts from './components/ListProducts';
import Product from './components/Product';
import FindProductForm from './components/FindProductForm';
import FindProductByForm from './components/FindProductByForm';


function App() {
  return (
    <Router>

      <div className="container-fluid mt-2">
        <Banner />

        <div className="row">
          <div className="col-2">
            <Navbar />
          </div>

          <div className="col-10">

            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/addProduct" component={ProductForm} exact/>
            <Route path="/listAll" component={ListProducts} exact/>
            <Route path="/findProduct/:id" component={Product} exact/>
            <Route path="/filterProducts" component={FindProductForm} exact/>
            <Route path="/findProductByForm" component={FindProductByForm} exact/>

            </Switch>

          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
