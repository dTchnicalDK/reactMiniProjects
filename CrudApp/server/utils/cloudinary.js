import dotenv from "dotenv";
dotenv.config();
const cloud_name = process.env.cloud_name;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";

// Configuration;
// cloudinary.config({
//   cloud_name: "dtek5slnq",
//   api_key: "538258213974325",
//   api_secret: "nqOwS1n10TKnUw0ILhtS6Qr_4Rs",
// });

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

const uploadOnCloudinary = async (localpath) => {
  try {
    if (!localpath) {
      return console.log("no localpath for file found");
    }
    console.log(api_key, api_secret);

    //uloadig local server file on cloudinary
    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });
    console.log("file uploaded in cloudinary succefully");
    return response;
  } catch (error) {
    fs.unlinkSync(localpath); ///removes locally saved files as the upload operation failed
    console.log(`cloudinary upload error: ${error}`);
  }
};

export default uploadOnCloudinary;
