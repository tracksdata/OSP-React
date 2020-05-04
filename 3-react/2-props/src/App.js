import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import StoryBox from './components/StoryBox';


const App = () => { // ES 6

  // JSX or hrml templae

  const stories = [
    { id: 1, author: 'Praveen', body: 'I am good' },
    { id: 2, author: 'James', body: 'I am sleepy' },
    { id: 3, author: 'Prashi', body: 'I want go out' },
    { id: 4, author: 'Ruth', body: 'Get some stuff' },
    { id: 5, author: 'Bucky', body: 'my own story' }
  ];

  return (
    // JSX must be returned...

    <div className="container">

      <div className="alert alert-warning">
        <h1>APP Component</h1>
      </div>

      <hr />

      <StoryBox title="Facebook" mystories={stories} />
      <hr />

      
      <hr />



    </div>

  )

}

export default App;
