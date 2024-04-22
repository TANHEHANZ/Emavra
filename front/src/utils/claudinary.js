
const UPLOAD_PRESET = "mmfwmoe3"; // Debes obtener este valor desde tu cuenta de Cloudinary
const CLOUDNAME ="dwic9q3lu"; // Debes reemplazar esto con tu nombre de Cloudinary

export const sendCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Error al cargar la imagen a Cloudinary');
    }

    const data = await response.json();
    return data.secure_url; // Devuelve la URL de la imagen cargada en Cloudinary
  } catch (error) {
    console.error('Error al cargar la imagen a Cloudinary:', error);
    throw error;
  }
};
