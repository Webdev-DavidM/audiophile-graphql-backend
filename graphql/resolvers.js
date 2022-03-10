import Product from '../models/Product.js';
import Category from '../models/Category.js';

export const resolvers = {
  Query: {
    getAllProducts: async () => {
      let products = await Product.find();
      return products;
    },
    getAllCategories: async () => {
      let categories = await Category.find();
      return categories;
    },
    getOneProduct: async (_, args, __) => {
      let product = await Product.find({ id: args.productId });
      return product[0];
    },
  },
};
