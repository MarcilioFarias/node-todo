import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/dbConnection";

export interface dbInterface extends Model{
    id: number;
    task_title: string;
    done: number;
};

export const dbData = sequelize.define<dbInterface>('node_todo_api',{

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    task_title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    }
}, {
    tableName: 'todo',
    timestamps: false
});