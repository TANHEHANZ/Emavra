const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const NoticiaController = {
  updateNorticia: async (req, res) => {
    try {
      const id = Number(req.params.idNot);
      const noticia = await prisma.noticias.update({
        where: { id_noticias: id },
        data: req.body,
      });
      formatResponse(res, "Actualizo", noticia);
    } catch (error) {
      capError(error, res);
    }
  },
  deleteNoticias: async (req, res) => {
    try {
      const id = Number(req.params.idNot);
      const deleteNot = await prisma.noticias.delete({
        where: { id_noticias: id },
      });
      formatResponse(res, "elimino", deleteNot);
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
