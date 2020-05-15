import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Greet from './components/Greet'
import UseAll from './components/Greet'

let App = () => {

  return (
    <div className="container">
      <h1>Welcome to my App</h1>

      <hr/>
      <Greet msg="How are you?"/>

    </div>
  )
}

export default App