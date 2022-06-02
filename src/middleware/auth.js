const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers.authorization;
  if (!token) {
    return res
      .status(403)
      .send({ status: 403, message: "A token is required for authentication" });
  }
  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ message: "Invalid token", err });
  }
  return next();
};

module.exports = verifyToken;
