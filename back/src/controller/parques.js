const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const controller = {
  update: async (req, res) => {
    try {
      const id = Number(req.params.idpar);
      const parque = await prisma.parques.update({
        where: { id_parques: id },
        data: req.body,
      });
      formatResponse(res, "Actualizo", parque);
    } catch (error) {
      capError(error, res);
    }
  },
  delete: async (req, res) => {
    try {
      const id = Number(req.params.idpar);
      const deleteData = await prisma.parques.delete({
        where: { id_parques: id },
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
      const getParque = await prisma.parques.findMany({
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
      const getIdParque = await prisma.parques.findMany({
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
module.exports = controller;
