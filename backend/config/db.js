import mongoose from "mongoose";
const connectDB = async(url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log(`MongoDB connected`);
    })
    .catch(() => {
      console.log(`Error while connection MongoDB`);
    });
};
export default connectDB;