import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log('MongoDB is connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export { connectDB };