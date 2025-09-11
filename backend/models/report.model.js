import mongoose, { mongo, Schema } from "mongoose"

const reportSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    technicianId: { type: mongoose.Schema.Types.ObjectId, ref: "Technician" },
    title: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String},
    voiceUrl: {type: String},
    status: {type: String,enum: ["Started", "Finished", "Pending","Updated"], default: "Pending"},
    createdAt: {type: Date, default: Date.now}
});


const Report = mongoose.model("Report", reportSchema);

export default Report