const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
const uploadsDir = path.join(__dirname, "../uploads");

const MultimediaController = {
  GetMultimedia: (req, res) => {
    fs.readdir(uploadsDir, (err, files) => {
      if (err) {
        return res.status(500).json({
          message: "Error al leer el directorio multimedia",
          error: err,
        });
      }
      const multimediaUrls = files.map(
        (file) => req.protocol + "://" + req.get("host") + "/uploads/" + file
      );
      return res.status(200).json({ multimediaUrls: multimediaUrls });
    });
  },
  saveMultimedia: async (req, res) => {
    try {
      upload.array("files", 10)(req, res, async function (err) {
        if (err) {
          return res
            .status(400)
            .json({ message: "Error al subir los archivos", error: err });
        }
        const fileUrls = req.files.map((file) => ({
          filename: file.filename,
          url:
            req.protocol +
            "://" +
            req.get("host") +
            "/uploads/" +
            file.filename,
        }));
        const savedFiles = await Promise.all(
          fileUrls.map(async (file) => {
            return await prisma.multimedia.create({
              data: { url_recurso: file.url },
            });
          })
        );

        return res.status(200).json({
          message: "Archivos subidos y URLs guardadas exitosamente",
          fileUrls: savedFiles,
        });
      });
    } catch (error) {
      console.error("Error al subir los archivos y guardar las URLs:", error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", error: error.message });
    }
  },
};

module.exports = MultimediaController;
