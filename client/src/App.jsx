import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
