
import { Router } from "express";
import { readFile, writeFile  } from 'fs/promises' 



const router = Router()
/* RUTAS DE VENTAS */

const fileSales = await readFile('./Datos/sectores.json', 'utf-8') 
const salesData = JSON.parse(fileSales) 

router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    const result = itemsData.find(e => e.id === id)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`${id} no se encuentra`)
    }
})


export default router