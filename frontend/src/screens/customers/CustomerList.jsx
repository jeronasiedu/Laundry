import React, { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import './CustomerList.css';
import AllList from './AllList';
import { BiChevronDown, BiCheckDouble, BiChevronUp } from 'react-icons/all';
const CustomerList = ({ phone, username, address, laundry }) => {
  let price = laundry.map((item) => {
    return +item.price;
  });
  price = price.reduce((cur, acc) => {
    return cur + acc;
  });
  const [currentItems, setCurrentItems] = useState(2);
  const handleMore = () => {
    if (currentItems < laundry.length) {
      setCurrentItems(laundry.length);
    } else {
      setCurrentItems(2);
    }
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className="item-container">
        <div className="item-details">
          <div className="item-left">
            <h3>{username}</h3>
            <p>{address}</p>
          </div>
          <div className="item-right">
            <h3>${price}</h3>
            <p>{phone}</p>
          </div>
        </div>
        <div className="all-items">
          {laundry.slice(0, currentItems).map((item, idx) => {
            return <AllList key={idx} {...item} />;
          })}
        </div>
        <div className="buttons">
          {laundry.length > 2 && (
            <IconButton
              variant="outlined"
              className="items-more"
              onClick={handleMore}
              size="small"
            >
              {currentItems === 2 ? <BiChevronDown /> : <BiChevronDown />}
            </IconButton>
          )}
          <IconButton color="secondary" aria-label="show more">
            <BiCheckDouble />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
};

export default CustomerList;
