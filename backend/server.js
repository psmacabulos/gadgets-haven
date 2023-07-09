import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from '../backend/data/products.js';

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  console.log(req.params);
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
