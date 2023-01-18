import './App.css';
import * as randomHex from 'random-hex';
import { useState } from 'react';

function App() {
  const generateHex = randomHex.generate();
  const [changeColor, setChangeColor] = useState('');

  return (
    <div className="bg--animation">
      <div
        className="App"
        style={{ backgroundColor: changeColor.toUpperCase() }}
      >
        <main className="main--container">
          <h1>Random Color</h1>

          <button
            onClick={() => {
              setChangeColor(generateHex);
            }}
            className="rc--Button"
          >
            Generate
          </button>
          <div
            className="displayHex"
            style={{ backgroundColor: changeColor.toUpperCase() }}
          >
            Generated Color: {changeColor.toUpperCase()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
