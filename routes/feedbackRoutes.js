import express from 'express';
import { handleFeedbackBatch } from '../controllers/feedbackController.js';

const router = express.Router();

// POST /feedback/batch
router.post('/batch', handleFeedbackBatch);

export default router;
