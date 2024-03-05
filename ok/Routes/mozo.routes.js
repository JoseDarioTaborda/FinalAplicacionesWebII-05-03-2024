import { Router } from "express";
import { readFile, writeFile  } from 'fs/promises' 

const router = Router()

/* RUTAS DE ITEMS */

const fileItems = await readFile('./Datos/mozo.json', 'utf-8') 
const itemsData = JSON.parse(fileItems) 

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