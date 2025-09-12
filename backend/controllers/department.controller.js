import express from "express"
import Report from "../models/report.model"
import Department from "../models/department.model";
import Technician from "../models/technician.model";



//all reports for a department
export async function allReports(req, res) {
    try {
        const deptId = req.deptId;
        if(!deptId){
            return res.status(404).json({ message: "not authorized", success: false });
        }
        const reports = await Report.find({ deptId })
        .select("_id report_id title location status priority assignedTech createdAt")
        .sort({createdAt: 1});

        if(!reports){
            return res.status(401).json({ message: "no reports assigned", success: false });
        }

        return res.json({success: true, reports});
    }    
    
    catch (error) {
        res.json({success: false, message: "couldn't retrieve reports", error: error.message})
    }
}

export async function SingleReport(req, res) {
    try {
        const {id} = req.params
        if(!id){
            return res.json({success: false, message: "report id to be provided"})
        }

        const report = await Report.findById(id)
        if(!report){
            return res.json({ success: false, message: "report not found" });
        }
        if(report.deptName.toString() !== req.department.deptName){
            return res.json({success: false, message: "report not assigned to your department"})
        }


        return res.json({success: true, report, message: "successfully retrieved"})
        
    } catch (error) {
         res.json({success: false, message: "couldn't retrieve report", error: error.message})
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


export async function getAllTechnicians(req, res){
    try {
        const deptId = req.deptId;
        if(!deptId){
            return res.status(401).json({ success: false, message: "Not authorized" });
        }
        const department = await Department.findOne({ deptName }).populate(
            "technicians"
        );

        if (!department || department.technicians.length === 0) {
            return res.json({ success: false, message: "No technicians found" });
        }

        return res.json({success: true, technicians: department.technicians})
    } catch (error) {
        res.status(500).json({
          success: false,
          message: "Couldn't retrieve technicians",
          error: error.message,
        });
    }
}