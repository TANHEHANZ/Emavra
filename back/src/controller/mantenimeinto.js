const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const MantenimeintoController = {
  updateMantenimeinto: async (req, res) => {
    try {
      const id = Number(req.params.idMan);
      const manetenimientoup = await prisma.manteniemiento.update({
        where: { id_mantenimiento: id },
        data: req.body,
      });
      formatResponse(res, "Actualizo", manetenimientoup);
    } catch (error) {
      capError(error, res);
    }
  },
  deleteMantenieminto: async (req, res) => {
    try {
      const id = Number(req.params.idMan);
      const deletemante = await prisma.manteniemiento.delete({
        where: { id_noticias: id },
      });
      formatResponse(res, "elimino", deletemante);
    } catch (error) {
      capError(error, res);
    }
  },
  getMantenimeinto: async (req, res) => {
    try {
      const getMantenimeintodata = await prisma.manteniemiento.findMany({});
      res.json(getMantenimeintodata);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = MantenimeintoController;
