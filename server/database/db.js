const mongoose = require("mongoose");

module.exports.connection = async (username, password) => {
  const url = "mongodb://127.0.0.1/flipkart-new";
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database");
  }
};
