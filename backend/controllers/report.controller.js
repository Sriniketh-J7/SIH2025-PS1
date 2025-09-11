import Report from "../models/report.model.js";


export const createReport = async (req, res) => {
   try {
      const { title, description } = req.body;
      const userId = req.user._id;
      const newReport = new Report({
        title,
        description,
        userId,
        imageUrl: req.files?.image ? req.files.image[0].path : undefined,
        audioUrl: req.files?.audio ? req.files.audio[0].path : undefined,
      });

      await newReport.save();
      res.json({ message: "Report created successfully", report: newReport });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
};


export const myReports = async(req, res) =>{
   try {
    const userId = req.user._id; // from JWT auth middleware

    // Find all reports for this user
    const reports = await Report.find({ userId }).sort({ createdAt: -1 });

    res.json({ reports });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}