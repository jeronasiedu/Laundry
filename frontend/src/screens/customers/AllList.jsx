import React from 'react';

const AllList = ({ item, total }) => {
  return (
    <div className="laundry-user-items">
      <ul>
        <li className="user-item-item">
          <p className="main-item">{item}</p>
          <p className="no-items">{total}</p>
        </li>
      </ul>
    </div>
  );
};

export default AllList;
