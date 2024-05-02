const { filterDestacados } = require("../middleware/destacados");
const express = require("express");

const router = express.Router();

const filterProyectos = filterDestacados('Proyectos');
const filterNoticias = filterDestacados('Noticias');
const filterMantenimiento = filterDestacados('Manteniemiento');

router.get('/proyectos', filterProyectos, (req, res) => {
  res.json(req.filteredPosts);
});

router.get('/noticias', filterNoticias, (req, res) => {
  res.json(req.filteredPosts);
});

router.get('/mantenimiento', filterMantenimiento, (req, res) => {
  res.json(req.filteredPosts);
});

module.exports = router;
