import { MeasureCreationAttributes } from "../database/models/SequelizeMeasureModel"
import { Measure } from "../types/Measure"

export interface IMeasureModel {
    createMeasure(measureData: MeasureCreationAttributes): Promise<Measure>
}