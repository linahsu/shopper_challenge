import { IMeasureModel } from "../Interfaces/IModel";
import MeasureModel from "../models/measure.model";
import { Measure } from "../types/Measure";
import { MeasureByCustomer } from "../types/MeasureByCustomer";
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

    async getMeasureByCustomer(customer_code: string): Promise<ServiceResponse<MeasureByCustomer>> {
        const measures = await this._measureModel.getMeasureByCustomer(customer_code);
        if (!measures) {
            return { status: 'MEASURES_NOT_FOUND', data: { message: 'Nenhuma leitura encontrada' } };
        }

        const formatedMeasures = {
            customer_code,
            measures: measures.map(measure => ({
                measure_uuid: measure.measure_uuid,
                measure_datetime: measure.measure_datetime,
                measure_type: measure.measure_type,
                has_confirmed: measure.has_confirmed,
                image_url: measure.image_url,
            })
        )};

        return { status: 'SUCCESSFUL', data: formatedMeasures };
    }
}