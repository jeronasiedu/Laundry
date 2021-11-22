import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
import itemRoute from './routes/routes.js';
// middleWares
app.use(express.json());
app.use(cors());
app.use('/api/laundry', itemRoute);
const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
