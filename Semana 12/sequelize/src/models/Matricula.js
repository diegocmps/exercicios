const { DataTypes, INTEGER } = require("sequelize");
const { connection } = require("../database/connection");

const Matricula = connection.define("matriculas", {
    usuario_id: {
        type: DataTypes.INTEGER
    },
    curso_id: {
        type: DataTypes.INTEGER
    }
})

module.exports = Matricula