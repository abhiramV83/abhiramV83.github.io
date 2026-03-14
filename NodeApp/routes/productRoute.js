import express from 'express';
import { showProducts } from "../configuration/productController.js";

const productRouter=express.Router();

productRouter.get('/',showProducts);
export default productRouter;