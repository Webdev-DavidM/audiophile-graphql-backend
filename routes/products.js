/* NPM packages */

import express from 'express';
const app = express();

// with es6 modules i haver to use the full filename with .js otherwise it wont find it unlike in react with babel.
/* Models */

import Product from '../models/Products.js';

// This will return all the products

app.get('/all', async (req, res, next) => {
  try {
    let products = await Product.find({});
    if (products) {
      res.status(200).json(products).end();
    } else {
      res.status(401).json('no products found');
    }
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

// Get one Product from the document

app.get('/product/:id', async (req, res, next) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.status(200).json(product).end();
    } else {
      res.status(401).json('No product found').end();
    }
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

export default app;
