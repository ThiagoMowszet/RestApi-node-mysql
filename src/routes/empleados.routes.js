import { Router } from "express"
import { createEmpleado, deleteEmpleado, getEmpleados, updateEmpleado, getEmpleado} from '../controllers/empleados.controllers.js'

const router = Router()

// GET 
router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)

// POST
router.post('/empleados', createEmpleado)

// PATCH
router.patch('/empleados/:id', updateEmpleado)

// DELETE
router.delete('/empleados/:id', deleteEmpleado)

export default router 
