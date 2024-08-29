import { IMeasureModel } from "../Interfaces/IModel";
import MeasureModel from "../models/measure.model";
import { MeasureData } from "../types/MeasureData";
import { validationsCreateMeasure } from "../validations/validationsCreateMeasure";

export default class MeasureService {
    constructor(private _measureModel: IMeasureModel = new MeasureModel()) {}

    async createMeasure(measureData: MeasureData) {
        const error = validationsCreateMeasure(measureData);
        if (error) return { status: error.status, data: { message: error.message } };
    }
}