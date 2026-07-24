const { DataTypes } = require('sequelize')
// su unico trabajo es conectar un usuario con una receta
// ej. "este usuario marco una receta como fav"
module.exports = (sequelize) => {
    const Favorito = sequelize.define('Favorito', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        userId: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        recetaId: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
    }, {
        tableName: 'favoritos',
        timestamps: true
    })

    return Favorito
    }