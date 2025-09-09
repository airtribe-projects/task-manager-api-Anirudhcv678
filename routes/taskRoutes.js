import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.use('/tasks', taskController);

export default router;

