import React from 'react';
import Navbar from './components/Navbar/NavBar';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='child'>
        <Navbar />
      </div>
      <div className='child'>
        <h1>REAL CONTENT</h1>
      </div>
    </div>
  );
};

export default App;
