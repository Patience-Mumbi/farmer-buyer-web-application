import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Nasese:78910@cluster0.66hv7.mongodb.net/farmer-buyer')
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.error("DB Connection Error: ", err);
    });
};
