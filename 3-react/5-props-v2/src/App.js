import React, { Component } from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

class App extends Component {

  changeGreeting(msg) {
    console.log("changeGreeting:: method: "+msg);
  }
  render() {
    return (
      <div className="container">


        <Greet message="Good Morning" />

        <div className="text-center">
          <button className="btn btn-primary" onClick={e=>this.changeGreeting('Good Morning')}>Good Morning</button>
        </div>

      </div>
    );
  }
}

export default App;