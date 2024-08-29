import { MeasureData } from "../types/MeasureData";
import { createMeasureSchema } from "./schemas";

export const validationsCreateMeasure = (measureData: MeasureData) => {
    const { error } = createMeasureSchema.validate(measureData);
    if (error) {
        return { status: 'INVALID_VALUE', message: error.message };
    }
};