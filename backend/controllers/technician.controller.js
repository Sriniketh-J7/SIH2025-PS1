import Technician from "../models/technician.model.js";
import generateToken from "../utils/generateToken.js";
import Report from "../models/report.model.js";
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
    id: technician._id,
    role: "technician",
  };
  const token = generateToken(payload);
  res.json(token);
};

export const alltasks = async (req, res) => {
  try {
    const assignedTechId = req.technicianId;

//sort in ascending order 1 to 10, 10 highest priority   
    const tasksAssigned = await Report.find({ assignedTechId })
      .select("_id title imageUrl location status priority createdAt")
      .sort({ priority: 1 });

    const technician = await Technician.findById(assignedTechId);

    if (!technician) {
      return res.status(404).json({ message: "Technician not found", success: false });
    }

    res.json({
      technician: technician.userName,
      tasksAssigned,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const task = async (req, res) => {
  const { id } = req.params;
  try {
    const assignedTechId = req.technicianId;
    const technician = await Technician.findById(assignedTechId);
    if (!technician) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }
    
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: "Task not found" });
    }
    if(report.assignedTechId !== assignedTechId){
      return res.status(403).json({ message: "This task is not assigned to you" });
    }
    return res.json({ success: true, task: report });
  }
  catch (error) {
    return res.status(403).json({ success: false, error: error.message });
  }
};

export const startTask = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findById(id);

    if (!report) return res.status(404).json({ message: "Task not found" });

    // Ensure the technician is assigned to this task
    if (report.assignedTechId?.toString() !== req.technicianId.toString()) {
      return res.status(403).json({ message: "Not authorized for this task" });
    }

    report.status = "InProgress";
    report.startedAt = new Date(); 
    await report.save();

    res.json({ message: "Task marked as In Progress", task: report });
  } catch (error) {
    console.error("Error starting task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// PATCH /technician/tasks/:id/update → add notes/photos while working
export const updateTask = async (req, res) => {
  const { id } = req.params;


  try {
    const report = await Report.findById(id);

    if (!report) return res.status(404).json({ message: "Task not found" });

    if (report.assignedTechId?.toString() !== req.technicianId.toString()) {
      return res.status(403).json({ message: "Not authorized for this task" });
    }
    report.status = "Updated";
    await report.save();

    res.json({ message: "Task updated", task: report });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// PATCH /technician/tasks/:id/resolve → mark as Resolved
export const resolveTask = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findById(id);

    if (!report) return res.status(404).json({ message: "Task not found" });

    if (report.assignedTechId?.toString() !== req.technicianId.toString()) {
      return res.status(403).json({ message: "Not authorized for this task" });
    }
  if (req.file) {
    //uplaod iamge
    report.resolvedImageUrl = req.file.path;
  }

    report.status = "Completed";
    await report.save();

    res.json({success: true, message: "Task resolved successfully", task: report });
  } catch (error) {
    console.error("Error resolving task:", error);
    res.status(500).json({success: false, message: "Server error" });
  }
};
