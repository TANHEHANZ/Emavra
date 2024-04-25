// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require("cloudinary").v2;
// const multer = require('multer');

// const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: "dwic9q3lu",
  api_key: "431571644337269",
  api_secret: "TDngtm3QPlDwK-44TJApLdXGepI",
});

// const uploadImage = async (file) => {
//     try {
//       const result = await cloudinary.uploader.upload(file.path);
//       return result;
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       throw new Error('Error uploading image');
//     }
//   };

const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw new Error("Error deleting image");
  }
};

const listImages = async () => {
  try {
    const result = await cloudinary.api.resources({ type: "upload" });

    const simplifiedResult = result.resources.map((resource) => ({
      url: resource.url,
      public_id: resource.public_id,
    }));

    return simplifiedResult;

  } catch (error) {
    console.error("Error listing images:", error);
    throw new Error("Error listing images");
  }
};

module.exports = {
  deleteImage,
  listImages,
};
