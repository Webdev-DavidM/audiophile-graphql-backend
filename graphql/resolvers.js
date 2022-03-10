import Product from '../models/Product.js';

export const resolvers = {
  Query: {
    getAllProducts: async () => {
      let products = await Product.find();

      return products;
    },
  },
};
