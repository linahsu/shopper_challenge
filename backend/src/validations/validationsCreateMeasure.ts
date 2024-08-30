import { MeasureData } from "../types/MeasureData";
import { createMeasureSchema } from "./schemas";

type Validation = {
    status: 'INVALID_DATA',
    message: string,
} | void;

export const validationsCreateMeasure = (measureData: MeasureData): Validation => {
    const { error } = createMeasureSchema.validate(measureData);
    if (error) {
        return { status: 'INVALID_DATA', message: error.message };
    }
};