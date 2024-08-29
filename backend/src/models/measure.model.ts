import { IMeasureModel } from "../Interfaces/IModel";
import SequelizeMeasureModel, { MeasureCreationAttributes } from "../database/models/SequelizeMeasureModel";
import { Measure } from "../types/Measure";

export default class MeasureModel implements IMeasureModel {
    private _model = SequelizeMeasureModel;

    async createMeasure(measureData: MeasureCreationAttributes): Promise<Measure> {
        const measure = await this._model.create(measureData);
        return measure;
    }
}