import CropModel from "../models/CropModel.js";
import fs from 'fs'


const addCrop = async (req, res) => {
    let image_filename = req.file.filename; 

    const crop = new CropModel({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await crop.save();
        res.json({
            success: true,
            message: "Plant Added",
             imageUrl: `http://localhost:4000/images/${image_filename}`
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const listCrop= async (req,res) =>{
    try{
      const Crops= await  CropModel.find({});
      res.json({success:true,data:Crops})
    } catch (error){
    console.log(error);
    res.json({success:false,message:"Error"})
    }
    }
    
const removeCrop = async (req, res) => {
    try {
        const crop = await CropModel.findById(req.body.id);
        fs.unlink(`uploads/${crop.image}`, () => {});

            await CropModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Crop Removed"})
        }catch (error){
            console.log(error);
            res.json({success:false,message:"Error"})
        }
    }
    
    
    export { addCrop, listCrop, removeCrop};
    

    