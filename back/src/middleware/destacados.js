const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const filterDestacados = (relation) => {
  return async (req, res, next) => {
    try {
      const posts = await prisma.post.findMany({
        where: {
          [relation]: {
            some: {},
          },
        },
        include: {
          [relation]: true,
        },
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

