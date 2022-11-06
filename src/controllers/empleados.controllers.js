import { pool } from '../db.js'

// GET
export const getEmpleados = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM empleado')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }
}

// en vez de usar try y catch podemos usar para produccion express-promise-router

export const getEmpleado = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [req.params.id])
        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }

}


// POST
export const createEmpleado = async (req, res) => {

    const { nombre, salario } = req.body

    try {
        const [rows] = await pool.query('INSERT INTO empleado(nombre, salario) VALUES (?,?)', [nombre, salario])
        res.send({
            id: rows.insertId,
            nombre,
            salario
        })

    } catch (error) {
        res.status(500).json({
            message: 'something goes wrong'
        })
    }

}



// PATH
export const updateEmpleado = async (req, res) => {

    try {
        const { id } = req.params
        const { nombre, salario } = req.body

        const [result] = await pool.query('UPDATE empleado SET nombre = IFNULL(?, name), salario = IFNULL(?, salario) WHERE id = ?', [nombre, salario, id])

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }

        const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?'[id])
        res.json(rows[0])
    }

    catch (error) {
        res.status(500).json({
            message: 'something goes wrong'
        })
    }
}


// DELETE
export const deleteEmpleado = async (req, res) => {

    try {
        const [result] = await pool.query('DELETE FROM empleado WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }

        res.sendStatus(204)

    } catch (error) {
        res.status(500).json({
            message: 'something goes wrong'
        })
    }
}
