import express from "express"
import { addCar, listCar, removeCar, sportCar, updateCar } from "../controller/CarController.js"
import multer from "multer"

const carRoute = express.Router();

const storage = multer.diskStorage({
    destination:"uploads.js",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage});

carRoute.post("/add",upload.single("image"),addCar)
carRoute.get("/list",listCar)
carRoute.post("/remove",removeCar)
carRoute.put("/update", updateCar)
carRoute.get("/sportcar",sportCar)


export default carRoute 