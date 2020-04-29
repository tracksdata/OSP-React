import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Clock';
import Clock from './Clock';

// Note
// Evenry filename with .js and having a function  is a component in reatc JS
// Paremt component can load child component

function App() {

  return(
    <div>
      <h1>My APP Component Root component</h1>
      <hr/>
     
     <Clock country="Indian" zone='Asia/Kolkata'/>
     <Clock country="American" zone='America/New_york'/>
     <Clock country="Dubai" zone='Asia/dubai'/>
     <Clock/>
     <Clock/>

     <Clock/>

     <Clock/>
     <Clock/>

     <Clock/>


    </div>
  )

}

export default App;
