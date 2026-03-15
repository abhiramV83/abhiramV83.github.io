import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/productRoute.js';
import dBConnect from './config/db.js';

dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;


app.set('view engine','ejs');//.set is a method of the express application that is used to set the value of a setting. In this case, we are setting the view engine to ejs which is a template engine that allows us to render dynamic HTML pages. We can use it to render the views in the controllers.
app.set('views', './views');//this will set the views directory to the current directory and we can use it to render the views in the controllers.
app.use(express.urlencoded({extended:true}))

const startServer= async()=> {
    await dBConnect() 
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}
app.use('/admin/products',productRouter);
startServer()