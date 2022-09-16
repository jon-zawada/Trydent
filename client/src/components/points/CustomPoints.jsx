import React from 'react';

const CustomPoints = () => {
  return (
    <div className='custom-points'>
      <h6 className='points-title'>Add custom points</h6>
      <form>
        <div className='input-group'>
          <label>Number</label>
          <input type='number' placeholder='10' />
        </div>
        <div className='input-group'>
          <label>Message</label>
          <input type='text' placeholder='Working out' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CustomPoints;
