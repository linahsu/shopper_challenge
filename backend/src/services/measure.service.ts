import { IMeasureModel } from "../Interfaces/IModel";
import MeasureModel from "../models/measure.model";
import { Measure } from "../types/Measure";
import { MeasureData } from "../types/MeasureData";
import { ServiceResponse } from "../types/ServiceResponse";
import { validationsCreateMeasure } from "../validations/validationsCreateMeasure";

export default class MeasureService {
    constructor(private _measureModel: IMeasureModel = new MeasureModel()) {}

    async createMeasure(measureData: MeasureData): Promise<ServiceResponse<Measure>> {
        // Validate the MeasureData values
        const error = validationsCreateMeasure(measureData);
        if (error) return { status: error.status, data: { message: error.message } };

        // Verify if there's already a measure of the same type in the same month
        const existingMeasure = await this._measureModel.getMeasureByCustomer(
            measureData.customer_code, measureData.measure_datetime, measureData.measure_type);
        if (existingMeasure) {
            return {
                status: 'INVALID_VALUE',
                data: { message: 'There is already a measure of this type in the same month' }
            };
        }
    }
}