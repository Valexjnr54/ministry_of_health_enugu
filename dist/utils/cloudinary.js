"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const cloudinaryConfig_1 = __importDefault(require("../config/cloudinaryConfig"));
// Function to upload an image to a specific folder and get the URL
async function uploadImage(ImagePath, FolderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(ImagePath, {
            folder: FolderPath, // Replace with your desired folder name
        });
        const imageUrl = result.secure_url;
        // console.log("Image URL:", imageUrl);
        // Save imageUrl to your database here
        // You should use a database library or framework to save the URL to your database
        return imageUrl; // Return the URL if needed
    }
    catch (error) {
        console.error("Error uploading image:", error);
    }
}
async function uploadFile(filePath, folderPath) {
    try {
        // Upload the file to Cloudinary without specifying the resource type
        const result = await cloudinaryConfig_1.default.uploader.upload(filePath, {
            folder: folderPath, // Replace with your desired folder name
            resource_type: 'raw', // Let Cloudinary automatically determine the resource type
        });
        const fileUrl = result.secure_url;
        return fileUrl; // Return the URL if needed
    }
    catch (error) {
        console.error("Error uploading file:", error);
        throw error; // Re-throw the error to propagate it upwards
    }
}
exports.uploadFile = uploadFile;
exports.default = uploadImage;
