import Joi from "joi";

const base64Regex = /^data:image\/(png|jpeg|jpg|gif|bmp|webp);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

const createMeasureSchema = Joi.object({
    image: Joi.string().pattern(base64Regex).required(),
    customer_code: Joi.string().required(),
    measure_datetime: Joi.date().required(),
    measure_type: Joi.string().required(),
});

export { createMeasureSchema };