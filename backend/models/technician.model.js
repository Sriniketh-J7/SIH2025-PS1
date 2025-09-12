import mongoose from "mongoose"

const technicianSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    deptName: {type: String, required: true},
    status: {type: String, enum: ["Available", "Busy", "Inactive"], default: "Available"}
}, {timestamps: true});

const Technician = mongoose.model("Technician", technicianSchema)

export default Technician