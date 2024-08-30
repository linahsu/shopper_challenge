import { IMeasureModel } from "../Interfaces/IModel";
import MeasureModel from "../models/measure.model";
import { Measure } from "../types/Measure";
import { MeasureData } from "../types/MeasureData";
import { ServiceResponse } from "../types/ServiceResponse";
import { validationsCreateMeasure } from "../validations/validationsCreateMeasure";
import { writeFileSync } from 'fs';

export default class MeasureService {
    constructor(private _measureModel: IMeasureModel = new MeasureModel()) {}

    // Função para converter base64 para arquivo temporário
    saveBase64Image(base64: string, filePath: string): void {
        const base64Data = base64.replace(/^data:image\/png;base64,/, "");
        writeFileSync(filePath, base64Data, 'base64');
    }

    async createMeasure(measureData: MeasureData): Promise<ServiceResponse<Measure>> {
        // Validate the MeasureData values
        const error = validationsCreateMeasure(measureData);
        if (error) return { status: error.status, data: { message: error.message } };

        // Verify if there's already a measure of the same type in the same month
        const {image, customer_code, measure_datetime, measure_type} = measureData;
        const existingMeasure = await this._measureModel.getMeasureByCustomerDateAndType(
            customer_code, measure_datetime, measure_type);
        if (existingMeasure) {
            return {
                status: 'DOUBLE_REPORT',
                data: { message: 'There is already a measure of this type in the same month' }
            };
        }

        // Extrai o valor da imagem com Gemini API Vision

    }

}