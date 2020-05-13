import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="alert alert-info text-center mt-2">
          <h1>Welcome to Praveen's React JS Assignment</h1>
        </div>

        <hr />
        <div className="alert alert-warning">
          React Hands on lab assignmnet for practicing react js step by step
        </div>

        <Instructions />
      </div>
    )
  }
}

export default App
