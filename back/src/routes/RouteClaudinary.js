const express = require('express');
const {  deleteImage, listImages } = require('../controller/claudinary');
const router = express.Router();

// Endpoint para subir una imagen
// router.post('/upload', async (req, res) => {
//   try {
//     const file = req.file; 
//     const result = await uploadImage(file);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: 'Error uploading image' });
//   }
// });

// Endpoint para eliminar una imagen
router.delete('/delete/:publicId', async (req, res) => {
  try {
    const publicId = req.params.publicId;
    const result = await deleteImage(publicId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting image' });
  }
});

router.get('/', async (req, res) => {
  try {
    const images = await listImages();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error listing images' });
  }
});

module.exports = router;
