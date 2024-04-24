const { Router } = require("express")
const Curso = require("../models/Curso")
const { auth } = require("../Middleware/Auth")
const CursoController = require("../controllers/CursoController")


const cursoRoute = new Router()

cursoRoute.post('/', auth, CursoController.cadastrar)

cursoRoute.get('/', auth, CursoController.listar)

cursoRoute.delete('/:id', auth, CursoController.deletar)

cursoRoute.put('/:id', auth, CursoController.atualizar)

module.exports = cursoRoute