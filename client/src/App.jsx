import React from 'react';
import Navbar from './components/Navbar/NavBar';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <div className='content-wrapper'>
        <div className='app'>
          <h1>REAL CONTENT</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
