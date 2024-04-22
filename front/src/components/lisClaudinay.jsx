const cloudName = 'tu-nombre-de-cloudinary';
const apiKey = 'tu-api-key';
const apiSecret = 'tu-api-secret';

fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image`, {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
  }
})
.then(response => response.json())
.then(data => {
  // La respuesta contiene la lista de imágenes
  console.log(data.resources);
})
.catch(error => {
  console.error('Error al obtener la lista de imágenes:', error);
});



const UPLOAD_PRESET = "mmfwmoe3";
const CLOUDNAME ="dtuncyh4v";

export const sendCloudinary = async (
  uri, 
  tipo
) => {
  return new Promise((resolve) => {
    const formData = new FormData();
    const fileToSend = {
      uri: uri,
      type: `test/${tipo}`,
      name: `test.${tipo}`
    };
    formData.append("file", fileToSend);
    formData.append("upload_preset", UPLOAD_PRESET );

    const req = new XMLHttpRequest();
    req.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`);
 

    req.addEventListener('load', () => {
      const res = JSON.parse(req.response);
      resolve(res.url);
    });

    req.send(formData);
  })
}