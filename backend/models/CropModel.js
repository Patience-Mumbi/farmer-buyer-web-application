import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const cropModel = mongoose.models.crop || mongoose.model("crop", cropSchema);

export default cropModel;
