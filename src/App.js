import React from 'react';
import './App.css';
import Header from './Header';
import Leftbar from './Leftbar';
import View from './View';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
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
