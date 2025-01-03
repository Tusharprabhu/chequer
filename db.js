import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.sbw1w.mongodb.net/database?retryWrites=true&w=majority");
    console.log('MongoDB is connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export { connectDB }; 

