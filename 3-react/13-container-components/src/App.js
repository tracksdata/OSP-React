import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import FoodBox from './components/FoodBox';

class App extends Component {


  render() {
    let vegItems = ['Dosa', 'Poori', 'Idle', 'Vada'];
    let nonVegItems = ['Chicken', 'Mutton', 'Egg'];
    return (
      <div className="container">

        <FoodBox title="Veg-Items">

          {vegItems} 

        </FoodBox>
        <FoodBox title="Non-Veg-Items">
          {nonVegItems}
        </FoodBox>

        <hr />

        
        <Veg>
          hello
          <hr />
          <p>Veg Items</p>

        </Veg>


      </div>
    );
  }
}

export default App;