import { Request, Response } from "express";
import MeasureService from "../services/measure.service";
import mapStatusHttps from "../utils/mapStatusHTTP";

export default class MeasureController {
    constructor(private _measureService = new MeasureService()) {}

    async createMeasure(req: Request, res: Response) {
        const { status, data } = await this._measureService.createMeasure(req.body);
        return res.status(mapStatusHttps(status)).json(data);
    }

    async confirmMeasure(req: Request, res: Response) {
        const { status, data } = await this._measureService.confirmMeasure(req.body);
        return res.status(mapStatusHttps(status)).json(data);
    }

    async getMeasureByCustomer(req: Request, res: Response) {
        const customer_code = req.params.customer_code;
        const type = req.query.measure_type as string | null;
        const { status, data } = await this._measureService.getMeasureByCustomer(customer_code, type);
        return res.status(mapStatusHttps(status)).json(data);
    }
}