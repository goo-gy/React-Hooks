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

const useTabs = (initialIndex, tabs) => {
  const [tabIndex, setTabIndex] = useState(initialIndex);
  if (!Array.isArray(tabs)) {
    return;
  }
  return { item: tabs[tabIndex], changeItem: (index) => setTabIndex(index) };
};

const allTabs = [
  {
    name: 'Section1',
    content: 'This is the content of the Section 1',
  },
  {
    name: 'Section2',
    content: 'This is the content of the Section 2',
  },
];

function App() {
  const name = useInput('Default', (value) => {
    return value.length <= 30;
  });
  const currentTab = useTabs(0, allTabs);

  return (
    <div className="App">
      <h1>Hello React Hooks</h1>
      <div>
        <h2>{name.value}</h2>
        <input {...name}></input>
      </div>
      <hr />
      <div>
        {allTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              currentTab.changeItem(index);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>{currentTab.item.content}</div>
    </div>
  );
}

export default App;
