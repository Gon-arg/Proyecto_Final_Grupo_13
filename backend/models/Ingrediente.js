const { DataTypes } = require('sequelize') // Esto importa los tipos de datos de Sequelize.

module.exports = (sequelize) => { // Esto exporta una función que recibe sequelize como parámetro. 
    const Ingrediente = sequelize.define('Ingrediente', { // define la tabla "ingredientes" con su col.
        id: {// asigna el identificador unico 
        type: DataTypes.INTEGER,
        primaryKey: true,// declara esta col como identificador unico
        autoIncrement: true // postgre asigna un numero automaticamente cuando se crea un ingrediente
        },
        nombre: {
        type: DataTypes.STRING,
        allowNull: false, // asigna como obligatorio
        validate: {
            notEmpty: true
        }
        },
        cantidad: {
        type: DataTypes.FLOAT, // para la cantidad, asi puede usar decimales
        allowNull: false
        },
        unidad: {
        type: DataTypes.STRING,  // "gramos", "tazas", "cucharadas"
        allowNull: false
        },
        recetaId: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
    }, {
        tableName: 'ingredientes',// nombre de la tabla 
        timestamps: true // hace que sequelize agregue auto sin que lo haga yo 
    })

    return Ingrediente
    }