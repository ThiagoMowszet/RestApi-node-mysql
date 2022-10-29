import express from 'express'
import empleados from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
const PORT = 3000

app.use(empleados)
app.use(indexRoutes)


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}...`);
})