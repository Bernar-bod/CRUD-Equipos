
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';

  export const Equipo = sequelize.define(
  'Equipos',
  {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
        allowNull: false,
    },
    estadio: {
        type: DataTypes.STRING,
        allowNull: false,    
  },
    fundacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
{
    tableName: 'crud_equipos',
    timestamps: false,
}
);

