import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Box, Divider, Tooltip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import './Cart.css';
import { MdAttachMoney } from 'react-icons/all';
import { submitData } from '../../helpers/api';
import { useMutation } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Cart = () => {
  const navigate = useNavigate();
  // getting data from global state
  const { user, laundry } = useSelector((state) => state.user);
  let total = laundry.map((item) => {
    return +item.price;
  });
  total = total.reduce((cur, acc) => {
    return cur + acc;
  });
  // Submitting data
  const { mutateAsync, isLoading, data } = useMutation(submitData);
  const PostItem = async () => {
    await mutateAsync({ user, laundry });
    navigate('/customers', { replace: true });
  };
  if (data) {
    toast.success('Order placed');
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
      <section className="cart">
        <Box component={Paper} sx={{ padding: 2 }}>
          <div className="cart-user-details">
            <div className="list">
              <h3>Name:</h3>
              <p>{user.username}</p>
            </div>
            <div className="list">
              <h3>Phone:</h3>
              <p>{user.phone}</p>
            </div>
            <div className="list">
              <h3>Address:</h3>
              <p>{user.address}</p>
            </div>
          </div>
          <Divider />
          <div className="cart-item-details">
            <ul>
              {laundry.map((item, idx) => {
                return (
                  <li key={idx}>
                    <div className="item-single list">
                      <h4>{item.item}</h4>
                      <Tooltip title="total" placement="right-end">
                        <h4>{item.total}</h4>
                      </Tooltip>
                      <Tooltip title="Price" placement="right-end">
                        <div className="price">
                          <MdAttachMoney />
                          <h4>{item.price}</h4>
                        </div>
                      </Tooltip>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <Divider />
          <div className="total list">
            <h3>total:</h3>
            <div className="price">
              <MdAttachMoney />
              <p>{total}</p>
            </div>
          </div>
          <article className="actions">
            <Link to="/new">
              <Button variant="outlined" color="error" size="small">
                cancel
              </Button>
            </Link>
            <Button
              onClick={PostItem}
              variant="outlined"
              color="primary"
              size="small"
            >
              Continue
            </Button>
          </article>
        </Box>
      </section>
    </motion.div>
  );
};

export default Cart;
