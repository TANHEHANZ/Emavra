const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const PostController = {
  createPost: async (req, res) => {
    try {
      const {
        titulo,
        Descripcion,
        contenido,
        ubicacion,
        userId,
        multimediaIds,
        destacar,
        fecha,
      } = req.body;
      const nuevoPost = await prisma.post.create({
        data: {
          titulo,
          Descripcion,
          contenido,
          ubicacion,
          estado: true,
          destacar,
          fecha,
          userId,
          multimedia: {
            connect: multimediaIds.map((id_multimedia) => ({ id_multimedia })),
          },
        },
        include: {
          multimedia: {
            select: {
              url_recurso: true,
            },
          },
          userRelacion: {
            select: {
              email: true,
            },
          },
        },
      });

      res.status(200).json({ message: "Post creado exitosamente", nuevoPost });
    } catch (error) {
      console.error("Error al crear el post:", error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", error: error.message });
    }
  },
  getPost: async (req, res) => {
    const getposts = await prisma.post.findMany({
      include: {
        userRelacion: true,
        multimedia: {
          select: { url_recurso: true },
        },
      },
    });
    res.json(getposts);
  },

  updatePost: async (req, res) => {
    const reqParams = req.query;
    const idPost = Number(req.params.idPost);
    if (reqParams === noticia) {
      const updatePostNoticia = await prisma.post.update({
        where: { id_post: idPost },
        data: req.body,
        Noticias: {
          connect: id_noticias,
        },
      });
      res.json(updatePostNoticia);
    } else if (reqParams === proyectos) {
      const updatePostProyectos = await prisma.post.update({
        where: { id_post: idPost },
        data: req.body,
        Proyectos: {
          connect: id_proyectos,
        },
      });
      res.json(updatePostNoticia);
    }
  },
};

module.exports = PostController;
