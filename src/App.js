import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(0);
  // let [count, setCount] = useState(40);
  return (
    <CounterContext.Provider value = {countState}>
      <div className="App">
        <header className="App-header">
          <Parent name ="Ahsan"></Parent>
        </header>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
