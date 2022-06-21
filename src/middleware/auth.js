const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .send({ status: 401, message: "A token is required for authentication" });
  }
  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(403).send({ message: "Invalid token", err });
  }
  return next();
};

const isAdminAuth = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    if (decoded.isAdmin) {
      next();
    } else {
      return res.status(403).send({
        status: 403,
        message: "You're cannot access to this ressource.",
      });
    }
  }
};

module.exports = { verifyToken, isAdminAuth };
