import mongoose from "mongoose"

const technicianSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    assignedTask: [{type: mongoose.Schema.Types.ObjectId, ref: "Report"}],
    status: {type: String, enum: ["available", "Busy", "inactive"], default: "available"}
});

const Technician = mongoose.model("Technician", technicianSchema)

export default Technician