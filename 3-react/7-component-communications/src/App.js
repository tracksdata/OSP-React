import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActionBox from './components/ActionBox';
import Summary from './components/Summary';

class App extends Component {
  render() {
    return (
      <div className="container">
        
        <h1>APP Component</h1>
        <hr/>
        <ActionBox/>
      
      </div>
    );
  }
}

export default App;