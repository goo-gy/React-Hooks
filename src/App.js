import { useState } from 'react';
import './App.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const updateValue = e.target.value;
    let isValid = true;
    if (typeof validator === 'function') isValid = validator(updateValue);
    if (isValid) setValue(updateValue);
  };
  return { value, onChange };
};

function App() {
  const name = useInput('Default', (value) => {
    return value.length <= 30;
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{name.value}</h2>
      <input {...name}></input>
    </div>
  );
}

export default App;
