import express from 'express';
const router = express.Router();
import { createItem, getItem } from '../controllers/items.js';
router.post('/createItem', createItem);
router.get('/getItem', getItem);
export default router;
