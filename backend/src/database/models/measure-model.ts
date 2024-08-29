import { Optional, ModelDefined, DataTypes } from "sequelize";
import db from './index';
import { Measures } from "../../types/Measures";

export type MeasureCreationAttributes = Optional<Measures, 'id'>;

type MeasureSequelizeModelCreator = ModelDefined<Measures, MeasureCreationAttributes>;

const MeasureModel: MeasureSequelizeModelCreator = db.define('measures', {
    measure_uuid:  DataTypes.STRING,
    measure_datetime: DataTypes.DATE,
    measure_type: DataTypes.STRING,
    has_confirmed:  DataTypes.BOOLEAN,
    image_url: DataTypes.STRING,
    customer_code: DataTypes.STRING,
}, {
    tableName: 'measures',
    timestamps: false,
    underscored: true,
});

export default MeasureModel;