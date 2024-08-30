import { Request, Response } from "express";
import MeasureService from "../services/measure.service";
import mapStatusHttps from "../utils/mapStatusHTTP";

export default class MeasureController {
    constructor(private _measureService = new MeasureService()) {}

    async createMeasure(req: Request, res: Response) {
        const { status, data } = await this._measureService.createMeasure(req.body);
        return res.status(mapStatusHttps(status)).json(data);
    }

    async getMeasureByCustomer(req: Request, res: Response) {
        const { status, data } = await this._measureService.getMeasureByCustomer(req.params.customer_code);
        return res.status(mapStatusHttps(status)).json(data);
    }
}