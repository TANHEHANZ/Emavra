const { PrismaClient } = require("@prisma/client");
const { capError } = require("../utils/errorHanddler");
const { formatResponse } = require("../utils/responseHanddler");

const prisma = new PrismaClient();

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      capError(error, res);
    }
  },
  createUser: async (req, res) => {
    try {
      const createucer = await prisma.user.create({
        data: req.body,
      });
      formatResponse(res, "create", createucer);
    } catch (error) {
      capError(error, res);
    }
  },
  updateuser: async (req, res) => {
    const id = Number(req.params.idUser);
    try {
      const updateUser = await prisma.user.update({
        where: { id_user: id },
      });
      formatResponse(res, "Actualizar", updateUser);
    } catch (error) {
      capError(error, res);
    }
  },
};
module.exports = UserController;
