import productModel from "../models/productModel.js";
const showProducts = async (req, res) => {
    const products = await productModel.find();//this will return all the products in the database and we can send it as a response to the client 
    res.render("products/index", { products });//this will render the products/index.ejs file and pass the products data to it so that we can display it on the page .render is a method of the response object that is used to render a view and send it as a response to the client. The first parameter is the name of the view file and the second parameter is an object that contains the data we want to pass to the view file.
}
const addProductForm = (req,res)=>{
    res.render("products/add");
}
const addProduct = async(req,res)=>{
    await productModel.create(req.body)
    res.redirect("/admin/products")
}
export { showProducts,addProductForm,addProduct }//this will export the showProducts function so that we can use it in other files like routes.js where we will define the route for this function.