import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ClassCounter from './useState/ClassCounter';
import HookCounter from './useState/HookCounter';
import HookList from './useState/HookList';
import HookUserForm from './useState/HookUserForm';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">react-hooks</div>

        <div className="card-body">
          <ClassCounter />
          <hr />
          <HookCounter />

          <hr />
          <HookList />
        </div>

        <hr />
        <HookUserForm />

      </div>

      <div>

      </div>


    </div>
  );
}

export default App;
