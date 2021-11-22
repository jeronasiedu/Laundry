import Item from '../db/Model/Item.js';
const createItem = async (req, res) => {
  const { user, laundry } = req.body;
  try {
    const data = await Item.create({ ...user, laundry });
    res.status(201).json({
      msg: 'Order accepted',
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error.message });
  }
};
const getItem = async (req, res) => {
  const items = await Item.find({});
  res.status(200).json({
    items,
  });
};
export { createItem, getItem };
