import { Model, QueryInterface, DataTypes } from "sequelize";
import { Measure } from "../../types/Measure";

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Measure>>("measures", {
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
        });
    },

    down(queryInterface: QueryInterface) { 
        return queryInterface.dropTable('measures') 
      } 
}