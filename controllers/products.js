const getAllProduct = (req,res) => {
    res.status(200).json({msg:"Get all products"})
}

const getAllProductsStatic = (req,res) => {
    res.status(200).json({ msg: "Get static products" });
    
}


module.exports = {
    getAllProduct,
    getAllProductsStatic
}