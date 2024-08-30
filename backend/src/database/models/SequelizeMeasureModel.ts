import { Optional, ModelDefined, DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import db from './index';
import { Measure } from "../../types/Measure";

export type MeasureCreationAttributes = Optional<Measure, 'id'>;

class SequelizeMeasureModel extends Model<InferAttributes<SequelizeMeasureModel>,
    InferCreationAttributes<SequelizeMeasureModel>> {
    declare id: CreationOptional<number>;
    declare measure_uuid: string;
    declare measure_datetime: Date;
    declare measure_type: string;
    declare has_confirmed: boolean;
    declare image_url: string;
    declare customer_code: string;
}

SequelizeMeasureModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    measure_uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    measure_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    measure_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    has_confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customer_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    modelName: 'measures',
    timestamps: false,
    underscored: true,
});

export default SequelizeMeasureModel;