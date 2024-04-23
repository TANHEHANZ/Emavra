const { PrismaClient } = require("@prisma/client");
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const prisma = new PrismaClient();

const EmavraController = {
  cretaeEmavra: async (req, res) => {
    try {
      const createEmavra = await prisma.emavaTransparente.create({
        data: req.body,
      });
      formatResponse(res, "creo", createEmavra);
    } catch (error) {
      capError(error, res);
    }
  },
  getEmavra: async (req, res) => {
    try {
      const get = await prisma.emavaTransparente.findMany({});
      res.json(get);
    } catch (error) {
      capError(error, res);
    }
  },
  getEmavraID: async (req, res) => {
    try {
      const id = Number(req.params.idProyect);
      const getID = await prisma.emavaTransparente.findUnique({
        where: {
          id_transparencia: id,
        },
      });
      res.json(getID);
    } catch (error) {
      capError(error, res);
    }
  },
  updateEmavra: async (req, res) => {
    try {
      const id = Number(req.params.idEma);
      const updateEmavraa = await prisma.emavaTransparente.update({
        where: { id_transparencia: id },
      });
      formatResponse(res, "Actualizo", updateEmavraa);
    } catch (error) {
      capError(error, res);
    }
  },
  deleteProyect: async (req, res) => {
    try {
      const id = Number(req.params.idEma);
      const daleteEmavera = await prisma.emavaTransparente.delete({
        where: { id_transparencia: id },
      });
      formatResponse(res, "elimino ", daleteEmavera);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = { EmavraController };
