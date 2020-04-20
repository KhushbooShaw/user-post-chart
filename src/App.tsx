import React from 'react';
import './App.css';
import Home from 'components/home/Home';
import LandingPage from 'components/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home/> */}
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
