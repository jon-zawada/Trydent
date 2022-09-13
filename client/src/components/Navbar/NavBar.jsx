import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='nav-wrapper'>
        <div className='nav'>
          <h1><Link to='/'>Trydent</Link></h1>
          <nav>
            <ul>
              <li className='nav-item'><Link to='/points'>Points</Link></li>
              <li className='nav-item'><Link to='/about'>About</Link></li>
              <li className='nav-item'><Link to='/profile'>Profile</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
