import React from 'react';
import { operators, numPad, actionsPad } from './data/data';
import './App.css';

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
        <div key="display" id="display"></div>
        <div className="number-pad">
          {numPad.map((key) => (
            <button 
              id={key.id}
              key={key.id}
              onClick={() => console.log(key.id)}
            >{key.text}</button>
          )).reverse()}
        </div>
        <div className="action-pad">
          {actionsPad.map((key) => (
            <button
            id={key.id}
            key={key.id}
            >{key.text}</button>
          ))}
        </div>
        <div className="operator-pad">
        {operators.map((key) => (
            <button key={key.id} id={key.id}>{key.text}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
