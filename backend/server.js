import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from '../backend/data/products.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.json(products);
});
app.get('/products/:id', (req, res) => {
  console.log(req.params);
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
