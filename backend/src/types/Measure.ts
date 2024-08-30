export type Measure = {
    id: number,
    measure_uuid: string,
    measure_datetime: Date,
    measure_type: string,
    measure_value: number,
    has_confirmed:boolean,
    image_url: string,
    customer_code: string,
}