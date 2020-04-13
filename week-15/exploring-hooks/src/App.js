import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button_2';
import DataLoader from './DataLoader_1';
import DataLoader2 from './DataLoader_2';


function App() {
  return (
    <div className="App">
      <Button></Button>
      <DataLoader
        render={data => {
          return (
            <div>
              <ul>
                {data.map(el => (
                  <li key={el.id}>{el.title}</li>
                ))}
              </ul>
            </div>
          );
        }}
      />
      <DataLoader2
        render={data => {
          return (
          <div>
            <ul>
              {data.map(el => (
                <li key={el.id}>{el.title}</li>
              ))}
            </ul>
          </div>
          );
        }}
      />
    </div>
  );
}

export default App;
