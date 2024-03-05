import { Router } from "express"
import { readFile, writeFile  } from 'fs/promises' 

/* RUTAS DE USUARIOS */

const fileUsers = await readFile('./Datos/pedidos.json', 'utf-8') 
const userData = JSON.parse(fileUsers) 

const router = Router()

router.post('/estado', (req, res)=>{
    const userName = req.body.estado 
  
    const result = userData.find(e => e.estado === userName)
    if(result){
        res.status(200).json(`Bienvenido ${result.estado}`)
    }else{
        res.status(400).json(`${userName} no se encuentra`)
    }
})

app.put('/mesa/agregar/:userID', (req,res)=>{
 
    const new_mesa = req.body.idMesa
    const new_mozo = req.body.idMozo
    const nuevo_pedido = req.body.pedido
    const nuevo_pedido = req.body.estado
    

    try{
        const index = userData.findIndex(e => e.id == user_id)
        if(index != -1){
            userData[index].new_mozo = idMesa
            writeFile('./data.json', JSON.stringify(userData,null,2));
            res.status(200).json('Mesa Agregada')
        }else{
            res.send(400).json('No se encontro la mesa')
        }
    }catch(error){
        res.send(500).json('Error al actualizar al agregar la mesa')
    }
})



export default router