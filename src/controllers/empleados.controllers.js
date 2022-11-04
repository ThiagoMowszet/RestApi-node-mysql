import { pool } from '../db.js'

// GET
export const getEmpleados = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM empleado')
    res.json(rows)
} 


export const getEmpleado = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [req.params.id])

    if(rows.length <= 0) {
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    }
    res.json(rows[0])
}


// POST
export const createEmpleado = async (req, res) => {
    const { nombre, salario } = req.body
    const [rows] = await pool.query('INSERT INTO empleado(nombre, salario) VALUES (?,?)', [nombre, salario])
    res.send({
        id: rows.insertId,
        nombre,
        salario
    })
}


// DELETE
export const deleteEmpleado = async (req, res) => {
    const [result] = await pool.query('DELETE FROM empleado WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0){
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    }

    res.sendStatus(204)
}


// PATH
export const updateEmpleado = async (req, res) => {
    const { id } = req.params
    const { nombre, salario } = req.body

    const [result] = await pool.query('UPDATE empleado SET nombre = IFNULL(?, name), salario = IFNULL(?, salario) WHERE id = ?', [nombre, salario, id])

    if(result.affectedRows === 0){
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    }

    const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?' [id])
    res.json(rows[0])
}
