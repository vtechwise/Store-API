const Product = require("../models/product");

const getAllProduct = async(req, res) => {
  const { featured, company } = req.query
  let queryObject = {}
  if (featured) {
     queryObject.featured = featured === 'true'? true : false
  }
  const products =await Product.find(queryObject)
  res.status(200).json({products,nbHits:products.length})
};

const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "Get static products" });
};

module.exports = {
  getAllProduct,
  getAllProductsStatic,
};
