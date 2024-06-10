const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");
const Logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLog = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!userLog) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }
    const passwordMatch = await bcrypt.compare(password, userLog.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = generateToken(userLog);
    res.json({ token });
    verificar(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error: " + error });
  }
};



const verificar = (token) => {
  const claveSecreta = "emabra-hanz-2024";
  jwt.verify(token, claveSecreta, (error, decoded) => {
    if (error) {
      console.error("Error al decodificar el token:", error);
    } else {
      console.log("Token decodificado:", decoded);
    }
  });
};

module.exports = { Logincontroller };
