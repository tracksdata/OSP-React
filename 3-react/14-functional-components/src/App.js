import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Greet,UseAll} from './components/Greet'

let App = () => {

  return (
    <div className="container">
      <h1>Welcome to my App</h1>

      <hr/>
      <Greet msg="How are you?"/>
      <UseAll/>

    </div>
  )
}

export default App