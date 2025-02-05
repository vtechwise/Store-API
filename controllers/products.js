const Product = require("../models/product");

const getAllProduct = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  let queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let result = Product.find(queryObject);

  // SORT
  if (sort) {
    const sortList = sort.split(",").join("");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  // FIELDS
  if (fields) {
    const fieldsList = fields.split(",".join(" "));
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({nbHits: products.length, products });
};

const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "Get static products" });
};

module.exports = {
  getAllProduct,
  getAllProductsStatic,
};
