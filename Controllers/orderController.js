const orderModel =  require('../Models/orderModel')                      
const productModel = require ('../Models/productModel')
// Create Order  -  /api/v1/order
exports.createOrder = async (req, res, next) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((pValue, item) => (pValue + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';

  const order =  await orderModel.create({cartItems , amount , status})


//   updating product stock
cartItems.forEach( async (item) => {
    const product = await productModel.findById(item.product._id);
    product.stock = product.stock - item.qty;
    await product.save();
})

    res.json(
        {
            success: true,
            order
        }
    )
}