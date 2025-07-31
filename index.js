// import express from 'express';
// import feedbackRoutes from './routes/feedbackRoutes.js';
// import { connectToDB } from './lib/db.js';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use('/feedback', feedbackRoutes);

// connectToDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// });

import express from "express";
import dotenv from "dotenv";
// import { connectDB } from "../config/db.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import { log } from "console";
import { connectDB } from "./config/db.js";
// import { connectToDB } from "./lib/db.js";

dotenv.config();

await connectDB(); // Ensure DB is connected before handling requests
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/feedback", feedbackRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
