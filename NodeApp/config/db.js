import mongoose from "mongoose";
const dBConnect=async()=>{
    (await mongoose.connect(process.env.MONGO_URI))
}
export default dBConnect;