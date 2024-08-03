//mongodb+srv://mqt28722:<password>@cluster0.ket6qjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://mqt28722:123@cluster0.ket6qjr.mongodb.net/project1').then(()=>console.log("DB connected"))
}