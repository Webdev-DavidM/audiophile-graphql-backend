import mongoose from 'mongoose';

// adjust the data connection below as required.

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://footballblubber:Technics1@cluster0.9ckfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = await mongoose.connection;
    if (db.readyState === 1) {
      console.log('were connected!');
    }
    if (db.readyState === 0) {
      console.log('not connected');
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
