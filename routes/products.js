const express = require("express");
const { getAllProduct, getAllProductsStatic } = require("../controllers/products");

const router = express.Router();

router.route("/").get(getAllProduct);
router.route('/static').get(getAllProductsStatic)


module.exports = router
