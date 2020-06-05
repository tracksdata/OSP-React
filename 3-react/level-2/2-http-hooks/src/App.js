import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ProductsFilter from './components/ProductsFilter';
import ListProducts from './components/ListProducts';
import FindProduct from './components/FindProduct';
import FIlterProductsByName from './components/FIlterProductsByName';
import ProductForm from './components/ProductForm';



function App() {

  let showListProductComponent = false;
  let showFilterProductComponent = false;
  let showFindProductComponent = false;
  let showFIlterProductsByName = false;


  return (

    <div className="container">

      {showListProductComponent ? <ListProducts /> : null}
      <hr />
      {showFilterProductComponent ? <ProductsFilter /> : null}
      <hr />
      {showFindProductComponent ? <ProductsFilter /> : null}
      <hr />
      {showFIlterProductsByName ? <FIlterProductsByName /> : null}

      <hr/>
      <ProductForm/>

    </div>
  );
}

export default App;
