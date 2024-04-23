const UPLOAD_PRESET = "mte0obla";
const CLOUDNAME ="dwic9q3lu";

export const uploadImageToCloudinary = async (file, tipo) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    const req = new XMLHttpRequest();
    req.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`);

    req.addEventListener('load', () => {
      if (req.status >= 200 && req.status < 300) {
        const res = JSON.parse(req.response);
        resolve(res.url);
      } else {
        reject(`Error ${req.status}: ${req.statusText}`);
      }
    });

    req.addEventListener('error', () => {
      reject('Network error occurred while uploading image');
    });

    req.send(formData);
  });
};
