const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const controllerVivero = {
  update: async (req, res) => {
    try {
      const id = Number(req.params.idpar);
      const vivero = await prisma.viveros.update({
        where: { id_vivero: id },
        data: req.body,
      });
      formatResponse(res, "Actualizo", vivero);
    } catch (error) {
      capError(error, res);
    }
  },
  delete: async (req, res) => {
    try {
      const id = Number(req.params.idpar);
      const deleteData = await prisma.viveros.delete({
        where: { id_vivero: id },
        select: {
          postId: true,
        },
      });

      if (deleteData) {
        await prisma.post.delete({
          where: { id_post: deleteData.postId },
        });
        formatResponse(res, "elimino", deleteNot);
      } else {
        formatResponse(res, "elimino solo el post", deleteNot);
      }
    } catch (error) {
      capError(error, res);
    }
  },
  get: async (req, res) => {
    try {
      const getParque = await prisma.viveros.findMany({
        include: {
          postRelacion: true,
        },
      });

      res.json(getParque);
    } catch (error) {
      capError(error, res);
    }
  },
  getID: async (req, res) => {
    try {
      const id = Number(req.params.idpar);
      const getIdParque = await prisma.viveros.findMany({
        where: {
          postRelacion: {
            id_post: id,
          },
        },
        include: {
          postRelacion: true,
        },
      });

      res.json(getIdParque);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = controllerVivero;
