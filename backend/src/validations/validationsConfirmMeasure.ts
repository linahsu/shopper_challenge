import { ConfirmMeasure } from "../types/ConfirmMeasure";
import { confirmMeasureSchema } from "./schemas";

type Validation = {
    status: 'INVALID_DATA',
    message: string,
} | void;

export const validationsConfirmMeasure = (confirmData: ConfirmMeasure): Validation => {
    const { error } = confirmMeasureSchema.validate(confirmData);
    if (error) {
        return { status: 'INVALID_DATA', message: error.message };
    }
};