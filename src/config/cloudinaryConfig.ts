import { v2 as cloudinary } from 'cloudinary'
import { cloudinaryConfig } from './config';

cloudinary.config({
    cloud_name: cloudinaryConfig.name,
    api_key: cloudinaryConfig.api_key,
    api_secret: cloudinaryConfig.api_secret,
    secure: true
})

export default cloudinary;