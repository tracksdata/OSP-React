import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Products from './Products';

function App() {
  return (
    <div className="contrainer">

      <h1>Hello</h1> <hr/>

      <Products/>


    </div>
  );
}

export default App;
