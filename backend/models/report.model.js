import mongoose, { mongo, Schema } from "mongoose"

const reportSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    title: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String},
    voiceUrl: {type: String},
    status: {type: String,enum: ["Started", "Finished", "Pending"], default: "Pending"},
    createdAt: {type: Date, default: Date.now}
});


const Report = mongoose.model("Report", reportSchema);

export default Report