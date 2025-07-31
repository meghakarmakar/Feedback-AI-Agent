import Feedback from "../models/Feedback.js";
import Summary from "../models/Summary.js";
import { generateStructuredFeedback } from "../services/stage1StructuredFeedback.js";
import { generateNarrativeFeedback } from "../services/stage2NarrativeFeedback.js";
import pLimit from "p-limit";

const limit = pLimit(10); // Controls concurrency (10 requests at a time)

export async function handleFeedbackBatch(req, res) {
  try {
    // 1️⃣ Get up to 50 unprocessed summaries
    const summaries = await Summary.find({ processed: false }).limit(50).lean();

    if (summaries.length === 0 || summaries.length > 50) {
      return res.status(400).json({ error: "No unprocessed summaries found" });
    }

    const results = await Promise.all(
      summaries.map((summaryDoc) =>
        limit(async () => {
          const structured = await generateStructuredFeedback(
            summaryDoc.summary
          );
          const narrative = await generateNarrativeFeedback(structured);

          // Save feedback
          await Feedback.create({
            summaryId: summaryDoc._id,
            structured,
            narrative,
          });

          // Mark summary as processed
          await Summary.findByIdAndUpdate(summaryDoc._id, { processed: true });

          return {
            summaryId: summaryDoc._id,
            structured,
            narrative,
          };
        })
      )
    );

    res.status(200).json({ processed: results.length, results });
  } catch (error) {
    console.error("❌ Feedback generation failed:", error);
    res.status(500).json({ error: "Feedback generation failed" });
  }
}
