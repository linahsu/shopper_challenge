import { MeasureData } from "../types/MeasureData";
import { createMeasureSchema } from "./schemas";

type Validation = {
    status: 'INVALID_VALUE',
    message: string,
} | void;

export const validationsCreateMeasure = (measureData: MeasureData): Validation => {
    const { error } = createMeasureSchema.validate(measureData);
    if (error) {
        return { status: 'INVALID_VALUE', message: error.message };
    }
};