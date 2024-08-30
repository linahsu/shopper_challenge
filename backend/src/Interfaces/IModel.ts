import { MeasureCreationAttributes } from "../database/models/SequelizeMeasureModel"
import { Measure } from "../types/Measure"

export interface IMeasureModel {
    createMeasure(measureData: MeasureCreationAttributes): Promise<void>
    getMeasureByUUID(uuid: string): Promise<Measure | null>
    confirmMeasure(uuid: string, confirmed_value: number): Promise<void>
    getMeasureByCustomerDateAndType(customer_code: string, date: Date, type: string): Promise<Measure | null>
    getMeasureByCustomer(customer_code: string, type: string | null): Promise<Measure[] | null>
}