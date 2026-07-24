const { MenuSemanal, MenuDia, Receta } = require('../models')

// GET /api/menu
const getMenu = async (req, res) => {
    try {
        const menus = await MenuSemanal.findAll({
        where: { userId: req.user.id },
        include: [
            {
            model: MenuDia,
            include: [Receta]
            }
        ]
        })

        return res.status(200).json(menus)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo obtener el menú' })
    }
    }

    // POST /api/menu
    const crearMenu = async (req, res) => {
    try {
        const { nombre, semana } = req.body

        if (!nombre || !semana) {
        return res.status(400).json({ error: 'El nombre y la semana son obligatorios' })
        }

        const menuExistente = await MenuSemanal.findOne({
        where: { userId: req.user.id, semana }
        })

        if (menuExistente) {
        return res.status(400).json({ error: 'Ya tenés un menú para esa semana' })
        }

        const menu = await MenuSemanal.create({
        nombre,
        semana,
        userId: req.user.id
        })

        return res.status(201).json(menu)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo crear el menú' })
    }
    }

    // POST /api/menu/:id/dias
    const agregarDia = async (req, res) => {
    try {
        const { id } = req.params
        const { dia, tipoComida, recetaId } = req.body

        if (!dia || !tipoComida || !recetaId) {
        return res.status(400).json({ error: 'Dia, tipoComida y recetaId son obligatorios' })
        }

        const menu = await MenuSemanal.findByPk(id)

        if (!menu) {
        return res.status(404).json({ error: 'Menú no encontrado' })
        }

        if (menu.userId !== req.user.id) {
        return res.status(403).json({ error: 'No tenés permiso para modificar este menú' })
        }

        const diaExistente = await MenuDia.findOne({
        where: { menuSemanalId: id, dia, tipoComida }
        })

        if (diaExistente) {
        return res.status(400).json({ error: 'Ya hay una receta asignada a ese día y tipo de comida' })
        }

        const receta = await Receta.findByPk(recetaId)

        if (!receta) {
        return res.status(404).json({ error: 'Receta no encontrada' })
        }

        const menuDia = await MenuDia.create({
        dia,
        tipoComida,
        recetaId,
        menuSemanalId: id
        })

        return res.status(201).json(menuDia)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo agregar el día al menú' })
    }
    }

    // DELETE /api/menu/:id/dias/:diaId
    const eliminarDia = async (req, res) => {
    try {
        const { id, diaId } = req.params

        const menu = await MenuSemanal.findByPk(id)

        if (!menu) {
        return res.status(404).json({ error: 'Menú no encontrado' })
        }

        if (menu.userId !== req.user.id) {
        return res.status(403).json({ error: 'No tenés permiso para modificar este menú' })
        }

        const menuDia = await MenuDia.findByPk(diaId)

        if (!menuDia) {
        return res.status(404).json({ error: 'Día no encontrado' })
        }

        await menuDia.destroy()

        return res.status(200).json({ message: 'Día eliminado del menú correctamente' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo eliminar el día del menú' })
    }
    }

    // PUT /api/menu/:id
const actualizarMenu = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre } = req.body

        if (!nombre) {
            return res.status(400).json({ error: 'El nombre es obligatorio' })
        }

        const menu = await MenuSemanal.findByPk(id)

        if (!menu) {
            return res.status(404).json({ error: 'Menú no encontrado' })
        }

        if (menu.userId !== req.user.id) {
            return res.status(403).json({ error: 'No tenés permiso para modificar este menú' })
        }

        menu.nombre = nombre
        await menu.save()

        return res.status(200).json(menu)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo actualizar el menú' })
    }
}

// DELETE /api/menu/:id
const eliminarMenu = async (req, res) => {
    try {
        const { id } = req.params

        const menu = await MenuSemanal.findByPk(id)

        if (!menu) {
            return res.status(404).json({ error: 'Menú no encontrado' })
        }

        if (menu.userId !== req.user.id) {
            return res.status(403).json({ error: 'No tenés permiso para eliminar este menú' })
        }

        await menu.destroy()

        return res.status(200).json({ message: 'Menú eliminado correctamente' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo eliminar el menú' })
    }
}

    module.exports = {
    getMenu,
    crearMenu,
    agregarDia,
    actualizarMenu,
    eliminarDia,
    eliminarMenu
    }