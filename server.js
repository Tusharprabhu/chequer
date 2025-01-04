import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.post('/Items', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).send({ message: 'Name and description are required' });
  }

  res.status(201).send({
    message: 'Item created successfully',
    item: {
      name: name,
      description: description,
    },
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
