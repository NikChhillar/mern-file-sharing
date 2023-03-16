import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log("db connected");
  } catch (error) {
    console.log("db error", error.message);
  }
};

export default DBConnection;
