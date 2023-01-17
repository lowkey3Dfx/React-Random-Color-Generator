import './App.css';
import * as randomHex from 'random-hex';
import { useState } from 'react';

function App() {
  const generateHex = randomHex.generate();
  const [changeColor, setChangeColor] = useState(generateHex);

  // export default function changeColor(){
  //   setChangeColor(() => )
  // }
  return (
    <div className="bg--animation">
      <div className="App" style={{ backgroundColor: `${generateHex}` }}>
        <main className="main--container">
          <h1>Random Color</h1>
          <button onClick={changeColor} className="rc--Button">
            GENERATE
          </button>
          <button onClick={changeColor} className="rc--Button">
            LIGHT
          </button>
          <button onClick={changeColor} className="rc--Button">
            DARK
          </button>
          <h2 className="displayHex">{generateHex.toUpperCase()}</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
