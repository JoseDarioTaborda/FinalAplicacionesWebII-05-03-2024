import express from 'express'
import { readFile, writeFile  } from 'fs/promises' 


import habitacionesRouter from './Routes/habitaciones.routes.js'
import clienteRouter from './Routes/cliente.routes.js'
const app = express()

const port = 3005

app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.use('/habitaciones', habitacionesRouter)
//app.use('/cliente', clienteRouter)