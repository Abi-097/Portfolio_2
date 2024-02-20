import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://abi:CCOU0EaiClMdjKtV@cluster0.m3kovfv.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected Successfully");
  } catch (e) {
    console.log(e);
  }
}
