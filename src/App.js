import React from 'react'
import Routers from './Router'
import {useState} from 'react'
import {authService} from './firebase'
import firebase from './firebase'

function App() {

  const [loginstate, loginset] = useState(authService.currentUser)
  
  return (
    <div className="App">
      <Routers loginstate={loginstate}/>
    </div>
  );
}

export default App;
