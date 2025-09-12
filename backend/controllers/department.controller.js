import Report from "../models/report.model.js";
import Department from "../models/department.model.js";
import Technician from "../models/technician.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
export async function loginDept(req, res) {
  try {
    const { deptHeadName, password } = req.body;
    const dept = await Department.findOne({ deptHeadName });
    if (!dept) {
      return res.status(404).json({ message: "Department not found",success: false });
    }

    const isMatch = await bcrypt.compare(password, dept.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials",success: false });
    }

    const payload = {
      id: dept._id,
      role: dept.deptName,
    };
    // generate token with dept id
    const token = generateToken(payload);

    res.json({
      success: true,
      message: "Login successful",
      token,
      dept: {
        id: dept._id,
        deptName: dept.deptName,
        deptHeadName: dept.deptHeadName,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error",success: false });
  }
}

//all reports for a department
export async function allReports(req, res) {
  try {
    const deptId = req.deptId;
    const deptName = req.department.deptName;
    if (!deptId) {
      return res
        .status(404)
        .json({ message: "not authorized", success: false });
    }
    const reports = await Report.find({ deptName })
      .select(
        "_id report_id title location status priority assignedTech createdAt"
      )
      .sort({ createdAt: 1 });

    if (!reports) {
      return res
        .status(401)
        .json({ message: "no reports assigned", success: false });
    }

    return res.json({ success: true, reports });
  } catch (error) {
    res.json({
      success: false,
      message: "couldn't retrieve reports",
      error: error.message,
    });
  }
}

export async function SingleReport(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ success: false, message: "report id to be provided" });
    }

    const report = await Report.findById(id);
    if (!report) {
      return res.json({ success: false, message: "report not found" });
    }

    if (report.deptName.toString() !== req.department.deptName) {
      return res.json({
        success: false,
        message: "report not assigned to your department",
      });
    }

    return res.json({
      success: true,
      report,
      message: "successfully retrieved",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "couldn't retrieve report",
      error: error.message,
    });
  }
}

export async function assignTechnician(req, res) {
  try {
    const { technicianId, reportId } = req.params;

    if (!technicianId) {
      return res
        .status(400)
        .json({ success: false, message: "Technician ID is required" });
    }

    if (!reportId) {
      return res
        .status(400)
        .json({ success: false, message: "Report ID is required" });
    }

    const technician = await Technician.findById(technicianId);
    if (!technician) {
      return res
        .status(404)
        .json({ success: false, message: "Technician not found" });
    }

    if (technician.status === "Inactive") {
      return res
        .status(400)
        .json({ success: false, message: "Technician is inactive" });
    }

    const report = await Report.findById(reportId);
    if (!report) {
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });
    }

    report.assignedTechId = technicianId;
    report.status = "Assigned";
    await report.save();

    return res.json({ success: true, message: "Technician assigned", report });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't assign technician",
      error: error.message,
    });
  }
}

export async function getAllTechnicians(req, res) {
  try {
    const deptId = req.deptId;
    const deptName = req.department.deptName;
    if (!deptId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }
    const department = await Department.findOne({ deptName }).populate(
      "technicians"
    );
    console.log(department);

    if (!department || department.technicians.length === 0) {
      return res.json({ success: false, message: "No technicians found" });
    }

    return res.json({ success: true, technicians: department.technicians });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't retrieve technicians",
      error: error.message,
    });
  }
}

export async function newTech(req, res) {
  try {
    const { userName, password } = req.body;
    const deptName = req.department.deptName;
    if (!userName || !password || !deptName) {
      return res
        .status(400)
        .json({ message: "Missing Fields", success: false });
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
      deptName,
    });
    await newTechnician.save();

    // Find the department by name and push the new technician's ID
    const department = await Department.findOne({ deptName });
    if (!department) {
      return res
        .status(404)
        .json({ message: "Department not found", success: false });
    }

    department.technicians.push(newTechnician._id);
    await department.save();

    return res.status(201).json({
      message: "Technician created and added to department",
      success: true,
      technicianId: newTechnician._id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
}
