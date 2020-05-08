import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActionBox from './components/ActionBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">

        <ActionBox/>
        
      </div>
    );
  }
}

export default App;