import { Equipo } from '../model/Equipo.js';

// Metodo getAll: obtener todos los equipos
export const getEquipos = async (req, res) => {     
    try {
        const equipos = await Equipo.findAll();
        res.json(equipos);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Metodo getEquiposById: obtener equipo por id
export const getEquipo = async (req, res) => {  
    try {
        const {id} = req.params;
        const equipo = await Equipo.findByPk(id);   
        if (equipo) {
            res.json(equipo);
        } else {
            res.status(404).json({message: 'Equipo no encontrado'});
        }   
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Metodo createEquipo: crear un nuevo equipo
export const createEquipo = async (req, res) => {  
    try {
        const {nombre, ciudad, estadio, fundacion} = req.body;
        const nuevoEquipo = await Equipo.create({nombre, ciudad, estadio, fundacion});
        res.status(201).json(nuevoEquipo);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

