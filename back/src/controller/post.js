const { PrismaClient } = require("@prisma/client");
const { formatResponse } = require("../utils/responseHanddler");
const prisma = new PrismaClient();

const PostController = {
  createPost: async (req, res) => {
    const createNoticias = req.query.Noticias;
    const createProyectos = req.query.Proyectos;
    const createMantenimeinto = req.query.Mantenimeinto;
    const createParques = req.query.Parques;
    const createViveros = req.query.Viveros;

    try {
      const nuevoPost = await prisma.post.create({
        data: req.body,
      });

      let message = "Se creo solo el post";
      let data = nuevoPost;

      if (nuevoPost && createNoticias === "true") {
        await prisma.noticias.create({
          data: {
            postId: nuevoPost.id_post,
          },
        });
        message = "noticia creada exitosamente";
      }
      if (nuevoPost && createParques === "true") {
        await prisma.parques.create({
          data: {
            postId: nuevoPost.id_post,
          },
        });
        message = "Parque creado exitosamente";
      }
      if (nuevoPost && createProyectos === "true") {
        await prisma.proyectos.create({
          data: {
            postId: nuevoPost.id_post,
          },
        });
        message = "proyecto creado exitosamente";
      }
      if (nuevoPost && createMantenimeinto === "true") {
        await prisma.manteniemiento.create({
          data: {
            postId: nuevoPost.id_post,
          },
        });
        message = "Manteniemiento creado exitosamente";
      }
      if (nuevoPost && createViveros === "true") {
        await prisma.viveros.create({
          data: {
            postId: nuevoPost.id_post,
          },
        });
        message = "vivero creado exitosamente";
      }
      res.status(200).json({ message, data });
    } catch (error) {
      console.error("Error al crear el post:", error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", error: error.message });
    }
  },
  getPost: async (req, res) => {
    const getposts = await prisma.post.findMany();
    res.json(getposts);
  },

  updatePost: async (req, res) => {
    try {
      const idPost = Number(req.params.idPost);
      const updatePostData = await prisma.post.update({
        where: { id_post: idPost },
        data: req.body,
      });
      formatResponse(res, "Actualizo", updatePostData);
    } catch (error) {
      res.json({ message: "Error en la peticion" });
    }
  },

  getAllDataDestacada: async (req, res) => {
    try {
      const getsAllDate = await prisma.post.findMany({
        where: {
          destacar: true,
        },
        take: 4,
        select: {
          multimedia: true,
        },
      });

      const imageUrls = getsAllDate.map((post) => post.multimedia[0]);

      res.status(200).json(imageUrls);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los datos destacados." });
    }
  },
};

module.exports = PostController;
