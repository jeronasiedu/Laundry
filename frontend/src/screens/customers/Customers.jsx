import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { getData } from '../../helpers/api';
import errorImage from '../../images/25.png';
import errorImage2 from '../../images/26.png';
import { Grid, Button } from '@mui/material';
import CustomerList from './CustomerList';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Customer.css';
import { BiNote } from 'react-icons/all';
const Customers = () => {
  const { data, isLoading, isError } = useQuery('items', getData);
  if (data && data.items.length < 1) {
    return (
      <aside className="nothing">
        <img src={errorImage2} alt="no one" />
        <h2>No one here...</h2>
        <Link to="/new">
          <Button endIcon={<BiNote />} variant="contained">
            New
          </Button>
        </Link>
      </aside>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <img src={errorImage} alt="error" />
        <h3>Error loading page, check your connection</h3>
        <Button variant="contained" color="warning" sx={{ mt: 2 }}>
          Home
        </Button>
      </div>
    );
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <section className="customers">
        {isLoading && (
          <Loader
            type="BallTriangle"
            color="#00fa"
            height={100}
            width={100}
            timeout={5000}
          />
        )}
        <Grid container spacing={1} sx={{ width: '100%' }}>
          {data &&
            data.items.map((item, idx) => {
              return <CustomerList key={idx} {...item} />;
            })}
        </Grid>
      </section>
    </motion.div>
  );
};

export default Customers;
