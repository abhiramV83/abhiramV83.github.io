import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: { type: String},
    price:{ type: Number},
    desc:{ type: String},
    imageUrl:{ type: String},

})

const productModel = mongoose.model("products", productSchema);//mongoose.model helper function to create a model based on the schema, first parameter is the name of the collection in the database and second parameter is the schema we created above it will create a collection named "products" in the database and we can use this model to perform CRUD operations on the products collection in the database.

export default productModel;