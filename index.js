import express from 'express';
import { sequelize } from './db/conexion.js';
//import { Persona } from './model/PersonaModel.js';
//import { Producto } from './model/ProductoModel.js';
//import { Estudiante } from './model/Estudiantes.js';  
//
import equipoRouter from './router/EquipoRouter.js';

const app = express()
const port = 3000
  
app.use(express.json());
app.use('/api', equipoRouter);



const main= async () =>{
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: false });
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
      });
  } catch (error) {
      console.error(`Error ${error}`);
  }
};
main();
