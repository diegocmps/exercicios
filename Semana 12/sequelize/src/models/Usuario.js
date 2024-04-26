const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const { hash } = require("bcryptjs");


const Usuario = connection.define('usuario', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
})

Usuario.beforeSave(async (user) => {

    user.password = await hash(user.password, 8)

    return user
})



module.exports = Usuario