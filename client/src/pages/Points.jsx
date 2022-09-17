import React from 'react';
import ContentWrapper from '../components/common/ContentWrapper';
import CustomPoints from '../components/points/CustomPoints';
import TablePoints from '../components/points/TablePoints';

const Points = () => {
  return (
    <ContentWrapper>
      <div className='app-flex'>
        <h1>Points</h1>
        <h4>Either add points manually or through your Rubrik</h4>
        <div className='user' />
        <div className='points'>
          <CustomPoints />
          <TablePoints />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Points;
