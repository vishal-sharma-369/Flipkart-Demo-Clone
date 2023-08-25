const Product = require("../models/product");

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
