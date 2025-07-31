// models/Feedback.js
import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
  {
    summaryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Summary', required: true },
    structured: { type: Object, required: true },
    narrative: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: 'feedback' }
);

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
