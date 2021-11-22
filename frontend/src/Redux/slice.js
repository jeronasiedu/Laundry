import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      username: '',
      phone: '',
      address: '',
    },
    laundry: {
      item: '',
      total: '',
      price: '',
    },
  },
  reducers: {
    update: (state, action) => {
      state.user = action.payload.user;
      state.laundry = action.payload.laundry;
    },
  },
});
const { reducer, actions } = userSlice;
export default reducer;
export const { update } = actions;
