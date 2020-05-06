import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  // Note: props are immutable types

  displayStories() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      numbers.map(n => {
        return (
          <p>{n}</p>
        )
      })

    )
  }

  render() {

    
    return (
      <div className="container">
        <h1>My class level component</h1>
        <hr />
        {this.displayStories()}
      </div>
    );
  }
}

export default App;