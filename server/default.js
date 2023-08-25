const { products } = require("./constants/data");
const Product = require("./models/product");

const defaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

module.exports = defaultData;
