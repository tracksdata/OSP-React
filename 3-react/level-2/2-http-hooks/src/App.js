import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ProductsFilter from './components/ProductsFilter';
import ListProducts from './components/ListProducts';
import FindProduct from './components/FindProduct';
import FIlterProductsByName from './components/FIlterProductsByName';



function App() {

  let showListProductComponent = false;
  let showFilterProductComponent = false;
  let showFindProductComponent = false;



  return (

    <div className="container">

      {showListProductComponent ? <ListProducts /> : null}
      <hr />
      {showFilterProductComponent ? <ProductsFilter /> : null}
      <hr />
      {showFindProductComponent ? <ProductsFilter /> : null}
      <hr />
      <FIlterProductsByName />

    </div>
  );
}

export default App;
