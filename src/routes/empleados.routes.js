import { Router } from "express"

const router = Router()


router.get('/empleados', (req, res) => res.send('Obteniendo Empleados'))

router.post('/empleados', (req, res) => res.send('Creado Empleados'))

router.put('/empleados', (req, res) => res.send('actualizando empleados'))

router.delete('/empleados', (req, res) => res.send('eliminando empleados'))



export default router 