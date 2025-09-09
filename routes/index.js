import express from 'express';

import routes from './taskRoutes.js';

const router = express.Router();

router.use('/tasks',routes);

export default router;

