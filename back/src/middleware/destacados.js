const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const filterDestacados = (relation) => {
  return async (req, res, next) => {
    try {
      const posts = await prisma.post.findMany({
        where: {
          destacar: true,
          [relation]: {
            some: {},
          },
        },
        select: {
          id_post: true,
          titulo: true,
          Descripcion: true,
          multimedia: true,
        },
      });

      posts.forEach((post) => {
        post.multimedia = post.multimedia ? [post.multimedia[0]] : [];
      });

      req.filteredPosts = posts;
      next();
    } catch (error) {
      console.log(error);
      capError(error, res);
    }
  };
};

module.exports = { filterDestacados };
