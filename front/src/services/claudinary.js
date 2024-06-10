const UPLOAD_PRESET = "mte0obla";
const CLOUDNAME = "dwic9q3lu";

export const uploadFileToCloudinary = async (file) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    // Cambia el endpoint dependiendo del tipo de archivo
    const endpoint = file.type.startsWith("image/") 
      ? `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload` 
      : `https://api.cloudinary.com/v1_1/${CLOUDNAME}/raw/upload`;

    const req = new XMLHttpRequest();
    req.open('POST', endpoint);

    req.addEventListener('load', () => {
      if (req.status >= 200 && req.status < 300) {
        const res = JSON.parse(req.response);
        resolve(res.url);
      } else {
        reject(`Error ${req.status}: ${req.statusText}`);
      }
    });

    req.addEventListener('error', () => {
      reject('Network error occurred while uploading file');
    });

    req.send(formData);
  });
};
