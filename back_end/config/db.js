const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database is okay");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
