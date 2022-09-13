import React from 'react';
import ContentWrapper from '../components/common/ContentWrapper';

const Points = () => {
  return (
    <ContentWrapper>
      <div className='app-flex'>
        <h1>Points</h1>
        <div className='user' />
        <div className='points'>
          <div className='points-manual'>
            <h6>Add points manually</h6>
            <input />
          </div>
          <div className='points-rubrik'>
            <h6>Rubrik</h6>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Points;
