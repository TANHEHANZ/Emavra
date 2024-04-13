const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Ruta de acceso a los archivos estáticos donde se guardarán las imágenes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Configuración de Multer para la carga de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads")); // Define el directorio donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utiliza el nombre original del archivo
  }
});

const upload = multer({ storage: storage });

// Manejador de ruta para la carga de imágenes
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.json({ message: "No file uploaded" });
  }

  // Construye la URL de la imagen guardada
  const imageUrl = `https://munayki.cidtec-uc.com/uploads/${req.file.originalname}`;

  // Devuelve la respuesta con la URL de la imagen guardada
  res.json({
    message: "Imagen guardada exitosamente",
    imageUrl: imageUrl
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
