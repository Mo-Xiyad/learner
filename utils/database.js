import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery');
  if (isConnected) {
    console.log('database is already connected! 🚀');
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'prompt-generator',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    isConnected = db.connections[0].readyState;
    console.log('database is connected! 🚀');
  } catch (error) {
    console.log(error);
  }
};
