import mongoose from "mongoose";

export const connectMongoDB = async (connnectionURL) => {
  try {
    const connection = await mongoose.connect(connnectionURL);
    return connection;
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};
