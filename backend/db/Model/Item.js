import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  laundry: [
    {
      item: { type: String, required: true },
      total: { type: String, required: true },
      price: { type: String, required: true },
    },
  ],
});
export default mongoose.model('Item', itemSchema);
