import { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{item}</h2>
    </div>
  );
}

export default App;
