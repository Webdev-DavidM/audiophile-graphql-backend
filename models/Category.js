import mongoose from 'mongoose';

//please just the name of the model titles as required

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Please provide a value for 'category'"],
    },
    image: {
      type: String,
      required: [true, "Please provide a value for 'category'"],
    },
  },

  { useUnifiedTopology: true }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
