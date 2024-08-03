import carModel from "../models/CarModel.js";
import fs from "fs"

const addCar = async(req,res)=>{
    let image_filename = `${req.file.filename}`

    const car = new carModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: image_filename,
    })

    try {
        await car.save();
        res.json({success: true, message:"Added Success"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Add FAILED"})
    }
}

const listCar = async(req,res)=>{
    try {
        const cars = await carModel.find({});
        res.json({success: true, data: cars})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"List fail"})
    }
}

const removeCar = async(req,res)=>{
    try {
        const car = await carModel.findById(req.body.id)
        fs.unlink(`uploads/${car.image}`,()=>{})
        await carModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message:"Delete Success"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Delete Fail"})
    }
}


const updateCar = async(req,res)=>{
    try {
        const car = await carModel.findById(req.body.id)
        if(!car){
            return res.json({success: true,message:"Car not found"})
        }
        car.name = req.body.name || car.name;
        car.description = req.body.description || car.description;
        car.category = req.body.category || car.category;
        car.price = req.body.price || car.price;
        if(req.image){
            fs.unlink(`$uploads/${car.image}`,()=>{})
            car.image = `${req.file.filename}`
        }
        await car.save();
        res.json({success:true, message:"Update Success"})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Update fail"})
    }
}

const sportCar = async(req,res)=>{
    try {
        const car = await carModel.find({category:"Sport"});
        const sportC = car.slice(0,5);
        res.json({success: true,data: sportC})
    } catch (error) {
        console.log(Error)
        res.json({success: false, message:"K tim dc sport Car"})
    }
}


export {addCar,listCar,removeCar,updateCar, sportCar}