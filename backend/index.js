//importing packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//importing files
import userRoutes from "./routes/user.routes.js";
import reportRoutes from "./routes/report.routes.js";
import technicianRoutes from "./routes/technician.routes.js";
import assignTechnician from "./routes/tp.routes.js"
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });

//Routes
app.use("/api/user", userRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/technician", technicianRoutes);
app.use("/reportAssign", assignTechnician)
//starting the server
app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}..`);
});
