import { Router } from "express";
import { readFile, writeFile  } from 'fs/promises' 

const router = Router()


const fileHabitaciones = await readFile('./Datos/habitaciones.json', 'utf-8') 
const habitacionesData = JSON.parse(fileHabitaciones) 

router.get('/:idhabitacion', (req, res)=>{
    const id = req.params.id

    const result = habitacionesData.filter(e => e.id == id)
    const habitacionespiso = result.map(e => {
        return {
          id: e.id,
          estado: e.estado,
          piso: e.piso,
          Cliente: e.id_cliente,
          ocupacion: e.ocupacion
        }
    })
    if(result){
        res.status(200).json(habitacionespiso)
    }else{
        res.status(400).json(`${id} se encuentra ocupada`)
    }
})


router.get('/:estado', (req, res)=>{
    const estado = parseInt(req.params.estado)

    const result = habitacionesData.filter(e => e.estado == estado)
    const filtrohabit= result.map(e=>{

        return {
            id: habitacion.id,
            estado: habitacion.estado,
            ocupacion: habitacion.ocupacion
        }
    })

    if (result){
        res.status(200).json(filtrohabit)
    }else{
        res.status(400).json(`Habitacion no disponible`)
    }
})


export default router