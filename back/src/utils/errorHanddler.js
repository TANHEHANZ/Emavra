const { PrismaClientUnknownRequestError } = require("@prisma/client");

const capError = (error, res) => {
  if (error instanceof PrismaClientUnknownRequestError) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "Error al ejecutar la consulta de la base de datos",
        error: error.code,
      });
  } else {
    console.log(error)
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { capError };
