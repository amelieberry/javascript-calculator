import React from 'react';
import './App.css';
import KeyPad from './components/keyPad';
import Display from './components/display';

function App() {

  /** USER STORY 7
   * At any time, pressing the clear button clears the input and output values, 
   * and returns the calculator to its initialized state; 
   * 0 should be shown in the element with the id of display.
  */

  // 1 - declare input value state with initial state of 0
  // 2 - declare output value state
  // 3 - clearDisplay function

 
  return (
    <div className="App">
      <div className="container">
        <Display />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
