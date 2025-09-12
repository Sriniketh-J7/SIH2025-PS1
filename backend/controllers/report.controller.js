import Report from "../models/report.model.js";


export const createReport = async (req, res) => {
   try {
      const { title, description } = req.body;
      const userId = req.user._id;
      const newReport = new Report({
        userId,
        title,
        description,
        imageUrl: req.files?.image ? req.files.image[0].path : undefined,
        audioUrl: req.files?.audio ? req.files.audio[0].path : undefined,
        location,
        priority,
        deptName
      });

      await newReport.save();
      res.json({success:true, message: "Report created successfully", report: newReport });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong",success: false });
    }
};

//all reports for a user
export const allReports = async(req, res) =>{
   try {
    const userId = req.user._id; // from JWT auth middleware

    // Find all reports for this user
    const reportDetails = await Report.find({ userId }).select("_id title location status priority createdAt").sort({ createdAt: -1 });
    
    res.json({ success: true,  reportDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" ,success: false});
  }
}


export const singleReport = async(req, res)=> {
  const id = req.params.id;
  try {
    if(!id){
      return res.status(400).json({ success: false, message: "Provide report id properly" });
    }
    const report = await Report.findById(id)
    if(!report){
       return res.status(404).json({ success: false, message: "Report not found" });
    }
    return res.json({success: true, report, message: "report found"})
  } 
  catch (error) {
    res.status(500).json({ error: error.message ,success: false});
  }
}

