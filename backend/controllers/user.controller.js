import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "Missing Fields", success: false });
  }

  const existingUser = await User.findOne({ userName });

  if (existingUser) {
    return res.status(400).json({
      message: "Username Already Exists, try another one",
      success: false,
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = new User({
    userName,
    password: hashedPass,
  });

  await newUser.save();
};

export const login = async (req, res) => {
  const { userName, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: !username ? "Username required" : "Password required",
      success: false,
    });
  }

  const user = await User.findOne({ userName });

  if (!user) {
    return res.status(400).json({ message: "Username not Found!" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid password",
      success: false,
    });
  }
  
};
