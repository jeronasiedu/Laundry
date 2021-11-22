import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './New.css';
import { Paper, Box, IconButton, Badge } from '@mui/material';
import { IoSendOutline, MdShoppingCart, BsCheck } from 'react-icons/all';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { update } from '../../Redux/slice';
const New = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const [itemList, setItemList] = useState([]);
  const [disabled, setDisabled] = useState(true);
  //   configuring redux
  const dispatch = useDispatch();
  //   Submitting items
  const ItemSubmit = (data) => {
    const { item, total, price } = data;
    setItemList([...itemList, { item, total, price }]);
    toast.success(`${item} added`, {
      position: 'top-center',
    });
    // reset({ item: '', total: '', price: '' });
  };
  //   Creating User
  const userSubmit = (data) => {
    const { username, phone, address } = data;
    const user = { username, phone, address };
    if (itemList.length < 1) {
      return toast.error('No clothes in cart', {
        position: 'top-center',
      });
    }
    toast.success(`Added ${username} for review `, {
      position: 'top-center',
    });
    setDisabled(false);
    const laundry = itemList;
    dispatch(update({ user, laundry }));
    navigate('/new/cart');
  };
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
      <section className="new">
        {itemList.length > 0 && (
          <div className="badge">
            <IconButton disabled={disabled} color="primary">
              <Link to="cart">
                <Badge
                  badgeContent={itemList.length}
                  sx={{ textDecoration: 'none', color: '#9c27b0' }}
                  color="primary"
                >
                  <MdShoppingCart />
                </Badge>
              </Link>
            </IconButton>
          </div>
        )}
        <Box component={Paper} sx={{ p: 1, position: 'relative' }}>
          <h2>New User</h2>
          <form onSubmit={handleSubmit(userSubmit)}>
            <input
              type="text"
              placeholder="name"
              required
              spellCheck="false"
              autoComplete="off"
              className="form-input"
              {...register('username')}
            />
            <input
              type="number"
              placeholder="phone"
              required
              spellCheck="false"
              className="form-input"
              {...register('phone')}
            />

            <input
              type="text"
              spellCheck="false"
              placeholder="address"
              required
              className="form-input"
              {...register('address')}
            />
            <IconButton type="submit" className="save" color="secondary">
              <BsCheck />
            </IconButton>
            {/* Item form */}
          </form>
          <div className="items">
            <form onSubmit={handleSubmit(ItemSubmit)}>
              <input
                type="text"
                placeholder="item"
                required
                className="form-input"
                autoComplete="off"
                {...register('item')}
              />
              <input
                type="number"
                placeholder="total"
                className="form-input"
                required
                autoComplete="off"
                {...register('total')}
              />
              <input
                type="number"
                placeholder="price"
                className="form-input"
                required
                autoComplete="off"
                {...register('price')}
              />
              <IconButton aria-label="submit" type="submit" color="primary">
                <IoSendOutline />
              </IconButton>
            </form>
          </div>
        </Box>
      </section>
    </motion.div>
  );
};

export default New;
