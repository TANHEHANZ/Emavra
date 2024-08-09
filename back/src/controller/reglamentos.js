const { PrismaClient } = require("@prisma/client");
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const prisma = new PrismaClient();

const ReglamentoController = {
  createReglamento: async (req, res) => {
    try {
      // Extraer y validar los campos necesarios de req.body
      const { Nombre, tipo, fecha, multimedia } = req.body;

      // Validar los campos, aquí puedes agregar más validaciones según tus necesidades
      if (!Nombre || !tipo || !fecha || !Array.isArray(multimedia)) {
        return res.status(400).json({ error: "Invalid input data" });
      }

      // Crear el reglamento usando los datos extraídos y validados
      const createEmavra = await prisma.reglamentos.create({
        data: {
          Nombre,
          tipo,
          fecha: new Date(fecha), // Asegúrate de convertir la fecha a un objeto Date
          multimedia,
        },
      });

      // Enviar una respuesta formateada
      formatResponse(res, "creado", createEmavra);
    } catch (error) {
      // Manejar errores
      capError(error, res);
    }
  },

  getEmavra: async (req, res) => {
    try {
      const get = await prisma.reglamentos.findMany({});
      res.json(get);
    } catch (error) {
      capError(error, res);
    }
  },
  getEmavraID: async (req, res) => {
    try {
      const id = Number(req.params.idProyect);
      const getID = await prisma.reglamentos.findUnique({
        where: {
          id_reglamento: id,
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
      const updateEmavraa = await prisma.reglamentos.update({
        where: { id_reglamento: id },
      });
      formatResponse(res, "Actualizo", updateEmavraa);
    } catch (error) {
      capError(error, res);
    }
  },
  deleteProyect: async (req, res) => {
    try {
      const id = Number(req.params.idEma);
      const daleteEmavera = await prisma.reglamentos.delete({
        where: { id_reglamento: id },
      });
      formatResponse(res, "elimino ", daleteEmavera);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = { ReglamentoController };
