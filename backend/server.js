import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import 'dotenv/config'
import carRoute from "./routes/CarRoute.js"
import userRoute from "./routes/UserRoute.js"


//app config
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//API Endpoint
app.use("/api/car",carRoute)
app.use("/images",express.static('uploads.js')) //lay hinh anh tu trang uploads
app.use("/api/user",userRoute)


app.get("/",(req,res)=>{
    res.send("API Working")
})

//callback function ()=>
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://berrlin:123@cluster0.nygevkv.mongodb.net/?