import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='nav'>
        <h1>Trydent</h1>
        <nav>
          <ul>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <hr />
            <li className='nav-item'><Link to='/about'>About</Link></li>
            <hr />
            <li className='nav-item'><Link to='/profile'>Profile</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
