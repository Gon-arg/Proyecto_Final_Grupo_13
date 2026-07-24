const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Receta = sequelize.define('Receta', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { // validaciones extras
            notEmpty: true,// no permite string vacios 
            len: [2, 100] // no permite menos de dos ni mas de 100 caracteres
        }
        },
        descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
        },
        tipo: {
        type: DataTypes.ENUM('desayuno', 'almuerzo', 'merienda', 'cena'),
        allowNull: false
        },
        instrucciones: {
        type: DataTypes.TEXT,
        allowNull: true
        },
        userId: {// col que conecta cada receta con su dueño 
        type: DataTypes.INTEGER,
        allowNull: false // si queres crear una receta sin titulo, sequelize tirar error antes de llegar a la bd
        }
    }, {
        tableName: 'recetas',//nombre de la tabla en PostgreSQL
        timestamps: true
    })

    return Receta
    }