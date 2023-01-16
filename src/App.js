import './App.css';
import * as randomHex from 'random-hex';
import { useState } from 'react';

function App() {
  const [changeColor, setChangeColor] = useState();

  // export default function changeColor(){
  //   setChangeColor(() => )
  // }
  return (
    <div className="App" style={{ backgroundColor: randomHex.generate() }}>
      <h1>This is a react random color generator</h1>
      <button onClick={changeColor}>Generate</button>
    </div>
  );
}

export default App;
