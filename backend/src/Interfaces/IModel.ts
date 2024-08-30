import { MeasureCreationAttributes } from "../database/models/SequelizeMeasureModel"
import { Measure } from "../types/Measure"

export interface IMeasureModel {
    createMeasure(measureData: MeasureCreationAttributes): Promise<Measure>
    getMeasureByCustomerDateAndType(customer_code: string, date: Date, type: string): Promise<Measure | null>
}