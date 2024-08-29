import { IMeasureModel } from "../Interfaces/IModel";
import MeasureModel from "../models/measure.model";
import { MeasureData } from "../types/MeasureData";

export default class MeasureService {
    constructor(private _measureModel: IMeasureModel = new MeasureModel()) {}

    async createMeasure(measureData: MeasureData) {
        
    }
}