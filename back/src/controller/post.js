const { PrismaClient } = require("@prisma/client");
const { formatResponse } = require("../utils/responseHanddler");
const prisma = new PrismaClient();

const PostController = {
  createPost: async (req, res) => {
    const createNoticias = req.query.Noticias;
    const createProyectos = req.query.Proyectos;
    const createMantenimeinto = req.query.Mantenimeinto;

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

      res.status(200).json({ message, data });
    } catch (error) {
      console.error("Error al crear el post:", error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", error: error.message });
    }
  },
  getPost: async (req, res) => {
    const getposts = await prisma.post.findMany({});
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
};

module.exports = PostController;
