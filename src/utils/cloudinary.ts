import cloudinary from '../config/cloudinaryConfig';

// Function to upload an image to a specific folder and get the URL
async function uploadImage(ImagePath : any, FolderPath: any) {
    try {
        const result = await cloudinary.uploader.upload(ImagePath, {
            folder: FolderPath, // Replace with your desired folder name
        });

        const imageUrl = result.secure_url;
        // console.log("Image URL:", imageUrl);

        // Save imageUrl to your database here
        // You should use a database library or framework to save the URL to your database

        return imageUrl; // Return the URL if needed
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export async function uploadFile(filePath: any, folderPath:any ) {
    try {
        // Upload the file to Cloudinary without specifying the resource type
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folderPath, // Replace with your desired folder name
            resource_type: 'raw', // Let Cloudinary automatically determine the resource type
        });

        const fileUrl = result.secure_url;

        return fileUrl; // Return the URL if needed
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error; // Re-throw the error to propagate it upwards
    }
}

export default uploadImage;
