import express from 'express';
import { Router } from 'express';
import measureRouter from './routes/measures.router';

const router = Router();

const app = express();
app.use(express.json());
router.use('/measures', measureRouter);


export default app;