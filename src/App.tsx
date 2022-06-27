import React from 'react';
import './App.css';
import {Dropdown} from "./components/Dropdown";
import Item from "./components/Dropdown/Item";

function App() {
  const data = [
    { id:1, name: 'Viet Name'},
    { id:2, name: 'English'},
    { id:3, name: 'USA'},
  ]
  const renderSelectCountry = () => {
    return (
      <Dropdown>
        <Dropdown.Select>
          <span>Select country</span>
        </Dropdown.Select>
        <Dropdown.List >
          {data.map(item => (
            <Item key={item.id}>{item.name}</Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    )
  }
  return (
    <div className="container mx-auto p-5">
      { renderSelectCountry() }
    </div>
  );
}

export default App;
