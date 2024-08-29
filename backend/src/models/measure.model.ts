import { Op } from "sequelize";
import { IMeasureModel } from "../Interfaces/IModel";
import SequelizeMeasureModel, { MeasureCreationAttributes } from "../database/models/SequelizeMeasureModel";
import { Measure } from "../types/Measure";

export default class MeasureModel implements IMeasureModel {
    private _model = SequelizeMeasureModel;

    async createMeasure(measureData: MeasureCreationAttributes): Promise<Measure> {
        const measure = await this._model.create(measureData);
        return measure;
    }

    async getMeasureByCustomer(customer_code: string, date: Date, type: string): Promise<Measure | null> {
        const { year, month } = { 
            year: date.getFullYear(), 
            month: date.getMonth() + 1
        };

        const measure = await this._model.findOne({
            where: {
                customer_code: customer_code,
                measure_type: type,
                measure_datetime: {
                    [Op.between]: [
                        new Date(year, month - 1, 1), // Primeiro dia do mês
                        new Date(year, month, 0) // Último dia do mês
                    ]
                }
            }
        });
        
        return measure;
    }
}