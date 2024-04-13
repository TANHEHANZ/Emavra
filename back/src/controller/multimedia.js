const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
const uploadsDir = path.join(__dirname, "../../uploads");

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
  saveMultimedia: (req, res) => {
    upload.single("file")(req, res, function (err) {
      if (err) {
        return res
          .status(400)
          .json({ message: "Error al subir el archivo", error: err });
      }
      const fileUrl =
        req.protocol +
        "://" +
        req.get("host") +
        "/uploads/" +
        req.file.filename;
      return res
        .status(200)
        .json({ message: "Archivo subido exitosamente", fileUrl: fileUrl });
    });
  },
};

module.exports = MultimediaController;
