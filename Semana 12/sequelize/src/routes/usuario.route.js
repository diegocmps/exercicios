const { Router } = require("express");
const { auth } = require("../Middleware/Auth");
const UsuarioController = require("../controllers/UsuarioController");


const usuarioRoute = new Router()

usuarioRoute.get('/', auth, UsuarioController.listar)

usuarioRoute.get('/alunos', auth, UsuarioController.listarAluno);

usuarioRoute.get('/professores', auth, UsuarioController.listarProfessor);

usuarioRoute.post('/', UsuarioController.criarUsuario)

usuarioRoute.put('/:id', auth, UsuarioController.atualizarUsuario)

usuarioRoute.delete('/:id', auth, UsuarioController.deletarUsuario)

module.exports = usuarioRoute