
const productModel = require('../Models/productModel')

// Get product API - /api/v1/product
exports.getProducts = async (req, res, next) => {

    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const products = await productModel.find(query);

    res.json({
        success: true,
        products
    })
}

// Get single product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    try {
        // take an id using `params.id`
        const product = await productModel.findById(req.params.id);

        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "(Unable to get product with that ID)  " + error.message
        })
    }

}