import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri =
      "mongodb+srv://orgilr84:Orgil20081124@cluster0.q4cfyfw.mongodb.net/Coffe";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectDB;
