import express from 'express';
import { showProducts,addProductForm ,addProduct} from '../controller/productController.js';
const productRouter=express.Router();

productRouter.get('/',showProducts);
productRouter.get('/add',addProductForm);
productRouter.get('/add',addProduct);


export default productRouter;