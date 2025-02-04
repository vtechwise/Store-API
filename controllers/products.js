const getAllProduct = (req, res) => {
    throw new Error('Testing async error')
    res.status(200).json({msg:"Get all products"})
}

const getAllProductsStatic = (req, res) => {
    
    res.status(200).json({ msg: "Get static products" });
    
}


module.exports = {
    getAllProduct,
    getAllProductsStatic
}