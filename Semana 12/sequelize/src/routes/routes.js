const { Router } = require("express");
const usuarioRoute = require("./usuario.route");
const cursoRoute = require("./cursos.route");
const loginRoutes = require("./login.route");




const routes = new Router()

routes.use('/usuario', usuarioRoute)
routes.use('/curso', cursoRoute)
routes.use('/login', loginRoutes)


module.exports = routes
