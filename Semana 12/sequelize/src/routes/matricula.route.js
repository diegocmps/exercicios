const { Router } = require("express");
const { auth } = require("../Middleware/Auth");
const MatriculaController = require("../controllers/MatriculaController");


const matriculaRoutes = new Router()

matriculaRoutes.post('/', MatriculaController.cadastrar)


module.exports = matriculaRoutes