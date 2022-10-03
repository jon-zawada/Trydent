import React from 'react';

const TablePoints = () => {
  const dummyData = [
    {
      category: 'working out',
      value: 25
    },
    {
      category: 'coding',
      value: 15
    },
    {
      category: 'something dope',
      value: 5
    },
    {
      category: 'eat healthy',
      value: 50
    },
    {
      category: 'working out',
      value: 25
    },
    {
      category: 'coding',
      value: 15
    },
    {
      category: 'something dope',
      value: 5
    },
    {
      category: 'eat healthy',
      value: 50
    },
    {
      category: 'working out',
      value: 25
    },
    {
      category: 'coding',
      value: 15
    },
    {
      category: 'something dope',
      value: 5
    },
    {
      category: 'eat healthy',
      value: 50
    },
  ];

  return (
    <div className='table-wrapper'>

      <table className='table-points'>
        <tr>
          <th>Category</th>
          <th>Point Value</th>
        </tr>
        {dummyData.map((data) => (
          <tr>
            <td>{data.category.toLocaleUpperCase()}</td>
            <td>{data.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TablePoints;
