
import React, { Component } from 'react';

import './App.css';

import Conversor from './components/Conversor'


class App extends Component {
  render(){
    return (
      <div className="App"> 
      <Conversor moedaA="USD" moedaB="BRL">
        </Conversor></div>
    );
  }
}

export default App;
