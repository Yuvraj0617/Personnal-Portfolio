import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.API_key,
  api_secret: process.env.API_secret
});

const uploadImage= async(LocalFilePath)=>{
    try{
        const response = await cloudinary.uploader.upload(LocalFilePath, {
            resource_type: "image"
        });
        fs.unlinkSync(LocalFilePath); // Clean up the file after upload
        return response;
    }catch(error){
        fs.unlinkSync(LocalFilePath); // Clean up the file after upload
        throw new Error("Failed to upload image: " + error.message);
    }
}

export { uploadImage };