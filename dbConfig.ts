import mongoose from "mongoose";

export async function connect() {
  try {
    if(process.env.NEXT_PUBLIC_MONGODB_URI===undefined)return null
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        `MongoDB connection error,Make sure MongoDB is running ${err}`
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
