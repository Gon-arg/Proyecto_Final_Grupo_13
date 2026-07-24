const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const MenuSemanal = sequelize.define('MenuSemanal', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        },
        semana: {
        type: DataTypes.STRING,
        allowNull: false
        },
        userId: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
    }, {
        tableName: 'menus_semanales',
        timestamps: true
    })

    return MenuSemanal
    }