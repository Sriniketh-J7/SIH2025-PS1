import { uploadReport } from "../config/cloudinary.js";
export const uploadreport = uploadReport.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ])