import express from 'express';
// import { Router } from 'express';
// import measureRouter from './routes/measures.router';
import { Router, Request, Response } from "express";
import MeasureController from "./controllers/measures.controller";

// const measureRouter = Router();
const measureController = new MeasureController();

// const router = Router();

const app = express();
app.use(express.json());
// router.use('/measures', measureRouter);

app.get('/', (req, res) => res.json({ ok: true }));

app.post("/", (req: Request, res: Response) => {
    measureController.createMeasure(req, res);
});

app.patch("/", (req: Request, res: Response) => {
    measureController.confirmMeasure(req, res);
});

app.get("/:customer_code/list", (req: Request, res: Response) => {
    measureController.getMeasureByCustomer(req, res);
});

export default app;