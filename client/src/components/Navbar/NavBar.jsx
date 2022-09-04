import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='nav'>
        <h1>Trydent</h1>
        <nav>
          <ul>
            <li className='nav-item'><a href='/'>Home</a></li>
            <hr />
            <li className='nav-item'><a href='/about'>About</a></li>
            <hr />
            <li className='nav-item'><a href='/profile'>Profile</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
