import express from 'express';
import taksRoutes from './routes/tasks.js';

const app = express()
app.use(taksRoutes)

export default app;