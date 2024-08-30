type MeasureInfo = {
    measure_uuid: string,
    measure_datetime: Date,
    measure_type: string,
    has_confirmed:boolean,
    image_url: string
}

export type MeasureByCustomer = {
    customer_code: string,
    measures: MeasureInfo[]
}
