import React from 'react';

const ContentWrapper = (props) => {
  return (
    <>
      <div className='content-wrapper'>
        <div className='app'>
          <h1>REAL CONTENT</h1>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
