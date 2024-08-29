import Joi from "joi";

const base64Regex = /^[A-Za-z0-9+/=]+$/;

const createMeasureSchema = Joi.object({
    image: Joi.string().pattern(base64Regex).required().message('Invalid base64 string'),
    customer_code: Joi.string().required(),
    measure_datetime: Joi.date().required(),
    measure_type: Joi.string().required(),
});

export { createMeasureSchema };