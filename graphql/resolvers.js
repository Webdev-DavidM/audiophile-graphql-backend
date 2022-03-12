import Product from '../models/Product.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const resolvers = {
  Query: {
    getAllProducts: async () => {
      try {
      } catch (err) {}
      let products = await Product.find();
      return products;
    },
    getAllProductsByCategory: async (_, args, __) => {
      try {
      } catch (err) {}
      let products = await Product.find({ category: `${args.category}` });
      return products;
    },
    getProduct: async (_, args, __) => {
      try {
        let product = await Product.findOne({ slug: `${args.slug}` });

        if (product) {
          return {
            code: 200,
            success: true,
            product: product,
          };
        } else {
          return {
            code: 404,
            success: false,
            product: null,
          };
        }
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
        };
      }
    },
    logIn: async (_, args, __) => {
      try {
        let user = await User.findOne({ email: `${args.email}` });
        if (!user) {
          return {
            code: 404,
            success: false,
            message: 'No user found',
          };
        } else {
          let result = await bcrypt.compare(args.password, user.password);
          if (result) {
            return {
              code: 200,
              success: true,
              message: 'User logged in',
            };
          } else {
            return {
              code: 401,
              success: false,
              message: 'Password incorrect',
            };
          }
        }
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: true,
          message: err.extensions.response.body,
        };
      }
    },
  },
};
