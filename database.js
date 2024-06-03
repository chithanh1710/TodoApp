import mongoose from "mongoose";

const username = encodeURIComponent("chithanh171004");
const password = encodeURIComponent("bhjZvwqqq55NnZ7J");
const uri = `mongodb+srv://${username}:${password}@cluster0.1am5tb2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

export default connectDB;
