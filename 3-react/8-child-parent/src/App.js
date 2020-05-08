import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

class App extends Component {

  state = {
    message: 'Default Data'
  }

  childData(data) {
    console.log("APP: child data ");
    console.log("Data: " + data);
    this.setState({ childMsg: data })


  }

  greetFunction(msg) {
    console.log('--- APP:: greetFunction');
    this.setState({ message: msg }) // render gets re-rendered
  }

  render() {
    let name = 'Praveen';
    return (
      <div className="container mt-3">

        <div className="alert alert-info text-center">
          <h1>APP-Parent Component</h1>
          <hr />

          <button className="btn btn-primary" onClick={e => this.greetFunction('Good Morning')}>Greet Me</button>
          <hr />
          <div className="alert alert-info">
            <h2>Child Data: {this.state.childMsg}</h2>
          </div>

        </div>

        <hr />

        <Greet greetings={this.state.message} onAction={e => this.childData(e)} />

      </div>
    );
  }
}

export default App;