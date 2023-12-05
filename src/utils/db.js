import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Db connect successful with ${conn.connection.host}`);
  } catch (error) {
    console.log("Db connection failed!!!!!", error);
    process.exit(1);
  }
};

export default dbConnection;
