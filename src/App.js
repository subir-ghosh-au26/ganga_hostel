import logo from './logo.png';
import './App.css';
import React from 'react';
import Ground from './Components/Ground';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
function App() {
  return (
    <div className="App">
      <div className='Full'>
        <div className="Nav">
      <img src={logo} className="App-logo" alt="logo" />
      <h3 className='Bipard'>Bihar Institute of Public Administration and Rural Development</h3>
      </div>
      <header className="App-header">
        <h2 className="title">BIPARD Hostel Management</h2> 
      </header>
      <h1 className='ganga'>Ganga Hostel</h1>
      <div className='Floor'>
      <Ground />
      <First />
      <Second />
      <Third />
      </div>
      <footer>&copy; Copyright owned by BIPARD, All Rights Reserved.</footer>
    </div>
    </div>
    
  );
}

export default App;
