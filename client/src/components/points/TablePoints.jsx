import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

const TablePoints = () => {
  const [rubrik, setRubrik] = useState([]);
  const userId = useAuth().user.id;

  const getRubrik = () => {
    axios.get(`http://localhost:3000/rubrik/${userId}`)
      .then((res) => {
        setRubrik(res.data);
      });
  };

  React.useEffect(() => {
    getRubrik();
  }, []);

  return (
    <div className='table-wrapper'>

      <table className='table-points'>
        <tr>
          <th>Category</th>
          <th>Point Value</th>
        </tr>
        {rubrik.map((data) => (
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
