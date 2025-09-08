import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Authorization token required: ", success: false });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_KEY);
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token", success: false });
  }
};

export default auth;