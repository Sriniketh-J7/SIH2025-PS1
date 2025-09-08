import JWT from "jsonwebtoken";

const generateToken = (data) => {
  return JWT.sign(data, process.env.JWT_KEY, { expiresIn: "1d" });
};

export default generateToken;
