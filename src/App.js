import React from 'react';
import './App.css';

const numPad = [
  {
    text: '0',
    id: 'zero'
  },
  {
    text: '.',
    id: 'decimal'
  },
  {
    text: '1',
    id: 'one'
  },
  {
    text: '2',
    id: 'two'
  },
  {
    text: '3',
    id: 'three'
  },
  {
    text: '4',
    id: 'four'
  },
  {
    text: '5',
    id: 'five'
  },
  {
    text: '6',
    id: 'six'
  },
  {
    text: '7',
    id: 'seven'
  },
  {
    text: '8',
    id: 'eight'
  },
  {
    text: '9',
    id: 'nine'
  }
]

const operators = [
  {
    text: '+',
    id: 'add'
  },
  {
    text: '-',
    id: 'subtract'
  },
  {
    text: '*',
    id: 'multiply'
  },
  {
    text: '/',
    id: 'divide'
  },
]

function App() {
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
          <button key='clear' id="clear">C</button>
          <button key="equals" id="equals">=</button>
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
