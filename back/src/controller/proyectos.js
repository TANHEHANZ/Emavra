const { PrismaClient } = require("@prisma/client");
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const prisma = new PrismaClient();

const ProyectoController = {
  getProyect: async (req, res) => {
    try {
      const getproyecto = await prisma.proyectos.findMany({});
      res.json(getproyecto);
    } catch (error) {
      capError(error, res);
    }
  },
  getProyectId: async (req, res) => {
    try {
      const id = Number(req.params.idProyect);
      const getProyectoId = await prisma.proyectos.findUnique({
        where: {
          id_proyectos: id,
        },
      });
      res.json(getProyectoId);
    } catch (error) {
      capError(error, res);
    }
  },
  createProyect: async (req, res) => {
    try {
      const createPost = await prisma.post.create({
        data: req.body,
      });

      if (createPost) {
        const createProyecto = await prisma.proyectos.create({
          data: {
            postId: createPost.id_post,     
          },
        });
        formatResponse(res, "Creo", createProyecto);
      } else {
        res.json({ error: "ocurrio un error" });
      }
    } catch (error) {
      capError(error, res);
    }
  },
  updateProtect: async (req, res) => {
    try {
      const id = Number(req.params.idProyect);
      const updateProtecto = await prisma.proyectos.update({
        where: { id_proyectos: id },
      });
      formatResponse(res, "Actualizo", updateProtecto);
    } catch (error) {
      capError(error, res);
    }
  },
  deleteProyect: async (req, res) => {
    try {
      const id = Number(req.params.idProyect);
      const deleteProyecto = await prisma.proyectos.delete({
        where: { id_proyectos: id },
      });
      formatResponse(res, "elimino ", deleteProyecto);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = { ProyectoController };
