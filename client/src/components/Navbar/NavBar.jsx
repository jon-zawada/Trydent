import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='nav'>
        <h1>Trydent</h1>
        <nav>
          <ul>
            <li className='nav-item'>Home</li>
            <hr />
            <li className='nav-item'>About</li>
            <hr />
            <li className='nav-item'>Profile</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
