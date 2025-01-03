import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import itemModel from './models/Items.js';

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});