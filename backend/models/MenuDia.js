const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const MenuDia = sequelize.define('MenuDia', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        dia: {
        type: DataTypes.ENUM(// significa que solo estos campos aceptan
                            //si alguein quiere guardar algo y sequelize tira un error antes de llegar a la bd
                            

            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes',
            'sabado',
            'domingo'
        ),
        allowNull: false
        },
        tipoComida: {
        type: DataTypes.ENUM(
            'desayuno',
            'almuerzo',
            'merienda',
            'cena'
        ),
        allowNull: false
        },
        menuSemanalId: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        recetaId: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
    }, {
        tableName: 'menu_dias',
        timestamps: true
    })

    return MenuDia
    }