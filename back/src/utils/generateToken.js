const jwt = require("jsonwebtoken");

function generateToken(user) {
    console.log(user)
  const payload = { userId: user.id_user };

  const token = jwt.sign(payload, "emabra-hanz-2024");

  return token;
}

module.exports = { generateToken };
