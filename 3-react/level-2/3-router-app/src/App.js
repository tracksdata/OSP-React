import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductForm from './components/ProductForm';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <Router>

      <div className="container mt-2">
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

            </Switch>

          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
