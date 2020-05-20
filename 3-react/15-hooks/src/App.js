import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import ClassCounter from './useState/ClassCounter';
import HookCounter from './useState/HookCounter';
import HookList from './useState/HookList';
import HookUserForm from './useState/HookUserForm';
import ClassAutoCount from './useEffect/ClassAutoCount';
import HookAutoCount from './useEffect/HookAutoCount';
import ClassTitleChange from './useEffect/ClassTitleChange';
import HookTitleChange from './useEffect/HookTitleChange';

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

        <hr />

        <ClassAutoCount />

        <hr />
        <HookAutoCount />
        <hr />
        <HookTitleChange />
      </div>

      <div>

      </div>


    </div >
  );
}

export default App;
