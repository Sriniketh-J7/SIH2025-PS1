import Technician from "../models/technician.model.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcrypt";

export const signuptech = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({ message: "Missing Fields", success: false });
  }
  const existingTechnician = await Technician.findOne({ userName });
  if (existingTechnician) {
    return res.status(400).json({
      message: "Username Already Exists, try another one",
      success: false,
    });
  }
  const hashedPass = await bcrypt.hash(password, 10);
  const newTechnician = new Technician({
    userName,
    password: hashedPass,
  });
  await newTechnician.save();
  const payload = {
    id: newTechnician._id,
    role: "technician",
  };
  const token = generateToken(payload);
  res.status(201).json(token);
};

export const logintech = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({
      message: !userName ? "Username required" : "Password required",
      success: false,
    });
  }
  const technician = await Technician.findOne({ userName });
  if (!technician) {
    return res.status(400).json({ message: "Username not Found!" });
  }
  const validPassword = await bcrypt.compare(password, technician.password);
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid password",
      success: false,
    });
  }
  const payload = {
    id: newTechnician._id,
    role: "technician",
  };
  const token = generateToken(payload);
  res.json(token);
};

export const alltasks = async (req, res) => {
  try {
    const technician = await Technician.findById(req.technicianId).populate(
      "assignedTask"
    );

    if (!technician) {
      return res.status(404).json({ message: "Technician not found" });
    }

    res.json({
      technician: technician.userName,
      tasks: technician.assignedTask,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const task = async (req, res) => {
  const { id } = req.params;

  const technician = req.technician;
  if (!technician) {
    return res.status(403).json({ message: "Access denied" });
  }
  const isAssigned = technician.assignedTask.some(
    (reportId) => reportId.toString() === id
  );
  if (!isAssigned) {
    return res
      .status(403)
      .json({ message: "This task is not assigned to you" });
  }
  const report = await Report.findById(id);
  if (!report) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json({ task: report });
};

export const startTask = async (req, res) => {};

export const updateTask = async (req, res) => {};

export const resolveTask = async (req, res) => {};
