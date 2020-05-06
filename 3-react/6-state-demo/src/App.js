import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet'
import './index.css';

class App extends Component {
  state = {
    message: 'Default Data'
  }

  constructor() {
    super();
    console.log("===> APP:constructor");
  }

  changeGreeting(msg) {
    console.log("APP:changeGreeting: " + msg);
    this.setState({ message: msg })
  }

  render() {
    console.log("====> APP:render");

    return (
      <div className="container">

        <div className="alert alert-info text-center">
          <h1>APP Component</h1>
          <hr />
          <span><h3>App Component Mesaage</h3></span>

        </div>

        <Greet greeting={this.state.message} />

        <div className="text-center">
          <button className="btn btn-primary btn-space"
            onClick={e => this.changeGreeting('Good Morming')}>Good Moring</button>
          <button className="btn btn-primary btn-space"
            onClick={e => this.changeGreeting('Good Afternoon')}>Good Afternoon</button>
          <button className="btn btn-primary btn-space"
            onClick={e => this.changeGreeting('Good Evening')}>Good Evening</button>
        </div>




      </div>
    );
  }
}

export default App;