import React from 'react';
import './App.css';
import Header from './Header';
import Leftbar from './Leftbar';
import View from './View';
import Login from './Login';

function App() {
  const user= null;
  return (
    <div className="app">
       {!user ? ( <Login /> ): 
        (
          <>
            <Header />
            <div className= "app-structure">
              <Leftbar />
              <View />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
