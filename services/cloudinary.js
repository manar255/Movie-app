
// const cloudinary = require('cloudinary').v2;

// const fs = require('fs');

// // console.log(process.env.CLOUDINARY_API_KEY)
// const uploadImage = async (imagePath, folderName) => {

//      cloudinary.config({
//         cloud_name: process.env.CLOUDINARY_NAME,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET
//     });
//     try{

//         const result = await cloudinary.uploader.upload(imagePath, {
//             folder: folderName,
//         });

//         fs.unlink(imagePath, (err) => {
//             if (err) {
//                 console.error('Error deleting the local image:', err);
//             } else {
//                 console.log('Local image deleted successfully');
//             }
//         });

//         return result.url;
//     }
//     catch(err){
//         throw error;
//     }

    
    
// }
// module.exports = {
//     uploadImage
// }