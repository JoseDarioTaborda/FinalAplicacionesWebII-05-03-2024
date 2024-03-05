import express from 'express'
import { readFile, writeFile  } from 'fs/promises' 


import mozoRouter from './Routes/mozo.routes.js'
import pedidosRouter from './Routes/pedidos.routes.js'
import sectoresRouter from './Routes/sectores.routes.js'
const app = express()

const port = 3005

app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.use('/mozo', mozoRouter)
app.use('/pedidos', pedidosRouter)
app.use('/sectores', sectoresRouter)