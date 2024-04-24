const { Router } = require("express");
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const professoresRoutes = require("./professores.route");
const loginRoutes = require("./login.route");
const matriculaRoutes = require("./matricula.route");

const routes = Router()

routes.use ('/matriculas', matriculaRoutes)
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/professor', professoresRoutes)
routes.use('/login', loginRoutes)


module.exports = routes