import mongoose from 'mongoose';
const connectDB = async (uri) => {
  return mongoose.connect(uri);
};
export default connectDB;
