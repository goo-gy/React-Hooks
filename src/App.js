import { useState } from 'react';
import './App.css';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

function App() {
  const name = useInput('Default');

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{name.value}</h2>
      <input {...name}></input>
    </div>
  );
}

export default App;
