import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://manusharajamanukula:667782457@cluster0.z2dblgd.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}