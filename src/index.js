import express from 'express'
import empleados from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())


app.use('/api', empleados)
app.use(indexRoutes)



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}...`);
})