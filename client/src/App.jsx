import React from 'react';
import Navbar from './components/Navbar/NavBar';
import Router from './components/Router/Router';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='content-wrapper'>
        <div className='app'>
          <h1>REAL CONTENT</h1>
          <Router />
        </div>
      </div>
    </>
  );
};

export default App;
