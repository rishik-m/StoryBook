import React from 'react';
import './App.css';
import Header from './Header';
import Leftbar from './Leftbar';
import View from './View';

function App() {
  return (
    <div className="app">
       <Header />
       <div className= "app-structure">
         <Leftbar />
         <View />
       </div>
    </div>
  );
}

export default App;
