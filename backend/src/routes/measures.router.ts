import { Router, Request, Response } from "express";
import MeasureController from "../controllers/measures.controller";

const measureRouter = Router();
const measureController = new MeasureController();

measureRouter.post("/", (req: Request, res: Response) => {
    measureController.createMeasure(req, res);
});
measureRouter.get("/:customer_code", (req: Request, res: Response) => {
    measureController.getMeasureByCustomer(req, res);
});

export default measureRouter;
