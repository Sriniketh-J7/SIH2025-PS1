// controllers/report.controller.js
import Report from "../models/report.model.js";
import Technician from "../models/technician.model.js";
import express from "express"
const router = express.Router()

router.post("/assign",async (req, res) => {
  const { reportId, technicianId } = req.body;

  try {
    // find technician
    const technician = await Technician.findById(technicianId);
    if (!technician) {
      return res.status(404).json({ message: "Technician not found", success: false });
    }

    // find report
    const report = await Report.findById(reportId);
    if (!report) {
      return res.status(404).json({ message: "Report not found", success: false });
    }

    // assign technician to report
    report.technicianId = technicianId;
    report.status = "Pending"; // reset status if needed
    await report.save();

    // also push this report to technician’s assignedTask array
    if (!technician.assignedTask.includes(report._id)) {
      technician.assignedTask.push(report._id);
      await technician.save();
    }

    res.json({
      message: "Technician assigned successfully",
      success: true,
      report,
    });
  } catch (error) {
    console.error("Error assigning technician:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
}
)


export default router