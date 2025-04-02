import express from "express";
import { addCrop,listCrop,removeCrop} from "../controllers/CropController_temp.js";
import multer from "multer";


const CropRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // Correct
    } 
    
});

const upload = multer({ storage: storage });

CropRouter.post("/add", upload.single("image"), addCrop);
CropRouter.get("/list", listCrop);
CropRouter.post("/remove", removeCrop);

export default CropRouter;