import mongoose from "mongoose";
const SummarySchema = new mongoose.Schema(
  {
    summary: { type: String, required: true },
    email: { type: String, required: true },
    processed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "summary",
  }
);
export default mongoose.models.Summary ||
  mongoose.model("Summary", SummarySchema);
