const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images: [
         {
            image : String
         }
    ],
    category : String,
    seller : String,
    stock : String,
    numOfReviews : String,
    createdAt : Date

});

// model(1. name, 2. schemaName)
const productModel = mongoose.model('Product',productSchema);


module.exports = productModel;