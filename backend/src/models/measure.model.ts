import { Op } from "sequelize";
import { IMeasureModel } from "../Interfaces/IModel";
import SequelizeMeasureModel, { MeasureCreationAttributes } from "../database/models/SequelizeMeasureModel";
import { Measure } from "../types/Measure";

export default class MeasureModel implements IMeasureModel {
    private _model = SequelizeMeasureModel;

    async createMeasure(measureData: MeasureCreationAttributes): Promise<void> {
        await this._model.create(measureData);
    }

    async getMeasureByUUID(uuid: string): Promise<Measure | null> {
        const measure = await this._model.findOne({ where: { measure_uuid: uuid } });
        return measure;
    }

    async confirmMeasure(uuid: string, confirmed_value: number): Promise<void> {
        await this._model.update(
            { has_confirmed: true, measure_value: confirmed_value },
            { where: { measure_uuid: uuid } }
        );
    }

    async getMeasureByCustomerDateAndType(customer_code: string, date: Date, type: string): Promise<Measure | null> {
        const { year, month } = { 
            year: new Date(date).getFullYear(), 
            month: new Date(date).getMonth() + 1
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

    async getMeasureByCustomer(customer_code: string, type: string | null): Promise<Measure[] | null> {
        if (type) {
            const measures = await this._model.findAll({ where: { customer_code: customer_code, measure_type: type } });
            if (measures.length === 0) return null;
            return measures;
        }
        const measures = await this._model.findAll({ where: { customer_code: customer_code } });
        if (measures.length === 0) return null;
        return measures;
    }
}