import logo from './logo.png';
import './App.css';
import Ground from './Ground';
import React from 'react';
import Second from './Second';
import First from './First';
import Third from './Third';
function App() {
  return (
    <div className="App">
      <div className='Full'>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <h2 className="title">BIPARD Ganga Hostel</h2> 
      </header>
      <div className='Floor'>
      <Ground />
      <First />
      <Second />
      <Third />
      </div>
    </div>
    </div>
  );
}

export default App;
