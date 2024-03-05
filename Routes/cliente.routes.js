import { Router } from "express";
import { readFile, writeFile  } from 'fs/promises' 

const router = Router()


const filecliente = await readFile('./Datos/cliente.json', 'utf-8') 
const clienteData = JSON.parse(filecliente) 

router.put('/nuevocliente', (req,res)=>{
    const cliente = req.body.id
    try{
        const index = clienteData.findIndex(e => e.id === cliente)

        if(index == e.id){
            clienteData[index].cliente = cliente
            res.status(400).json('Cliente ya agregado')
        }else{
            const nuevoCliente = {
                id: clienteData.length + 1,
                nombre,
                apellido
              };
            
              clienteData.push(nuevoCliente);
        }

        writeFile('./data/cliente.json', JSON.stringify(userData,null,2));
        res.status(200).json('Cliente agregado')

    }catch(error){
        res.send(500).json('Error al cargar cliente')
    }
})

export default router