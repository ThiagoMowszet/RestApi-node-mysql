import express from 'express'
import empleados from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())


app.use('/api', empleados)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not Found'
    })
})

export default app