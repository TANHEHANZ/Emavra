const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const NoticiaController = {
  craateNoticias: async (req, res) => {
    try {
      const noticia = await prisma.noticias.create({
        data: req.body,
      });
      formatResponse(res, "Creo", noticia);
    } catch (error) {
      capError(error, res);
    }
  },
  getNoticias: async (req, res) => {
    try {
      const getDataNoticias = await prisma.noticias.findMany({
        include: {
          postRelacion: {
            include: {
              userRelacion: true,
              multimedia: {
                select: { url_recurso: true },
              },
            },
          },
        },
      });

      res.json(getDataNoticias);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = NoticiaController;
