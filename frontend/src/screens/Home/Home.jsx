import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { BsPeople, BiNote } from 'react-icons/all';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
const Home = () => {
  return (
    <div className="home">
      <div className="home-ele">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
        >
          Welcome to the Laundry
        </motion.h1>
        <h2>
          <Typical
            wrapper="b"
            loop={Infinity}
            steps={['the best', 1000, 'always good', 2000]}
          />
        </h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'tween' }}
        >
          <Link to="/customers" className="link">
            <Button
              variant="contained"
              color="secondary"
              endIcon={<BsPeople />}
            >
              customers
            </Button>
          </Link>
          <Link to="/new" className="link">
            <Button
              sx={{ ml: 3 }}
              variant="contained"
              color="info"
              endIcon={<BiNote />}
            >
              new
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
