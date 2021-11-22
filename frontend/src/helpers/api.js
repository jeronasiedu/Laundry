import axios from 'axios';
export const submitData = async (data) => {
  const res = await axios.post(
    'http://localhost:5000/api/laundry/createItem',
    data
  );
  return res;
};
export const getData = async () => {
  const { data } = await axios.get('http://localhost:5000/api/laundry/getItem');
  return data;
};
