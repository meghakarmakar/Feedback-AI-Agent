// import { connectToDB } from '../../lib/db.js';
// import { handleFeedbackBatch } from '../../controllers/feedbackController.js';
// import { connectDB } from '../../config/db.js';

import { connectDB } from "../../config/db";
import { handleFeedbackBatch } from "../../controllers/feedbackController";

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   try {
//     await connectDB();
//     await handleFeedbackBatch(req, res);
//   } catch (error) {
//     console.error('❌ API Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    await connectDB();
    await handleFeedbackBatch(req, res);
  } catch (error) {
    console.error("Api not working", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
