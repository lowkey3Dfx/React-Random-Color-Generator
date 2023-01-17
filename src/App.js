import './App.css';
import * as randomHex from 'random-hex';
import { useState } from 'react';

function App() {
  const generateHex = randomHex.generate();
  const [changeColor, setChangeColor] = useState('#');

  return (
    <div className="bg--animation">
      <div className="App" style={{ backgroundColor: changeColor }}>
        <main className="main--container">
          <h1>Random Color</h1>

          <button
            onClick={() => {
              setChangeColor(generateHex);
            }}
            className="rc--Button"
          >
            GENERATE
          </button>
          <p>Generated Color:</p>
          <h2 className="displayHex">{changeColor.toUpperCase()}</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
