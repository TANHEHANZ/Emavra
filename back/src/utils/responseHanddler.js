const formatResponse = (res, tipo, data) => {
  const message = `Se ${tipo} el registro correctamente`;
  const response = {
    message: message,
    data,
  };
  return res.status(200).json(response);
};
module.exports = { formatResponse };
