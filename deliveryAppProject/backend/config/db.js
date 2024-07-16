import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://akshatsharma779:akshat123@cluster0.azgpzdc.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));

}