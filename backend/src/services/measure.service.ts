import { IMeasureModel } from "../Interfaces/IModel";
import MeasureModel from "../models/measure.model";

export default class MeasureService {
    constructor(private _measureModel: IMeasureModel = new MeasureModel()) {}
}