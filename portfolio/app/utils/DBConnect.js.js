const mongoose = require("mongoose");
const connectDB = async () => mongoose.connect(process.env.MONGO_DB);

export default connectDB;
