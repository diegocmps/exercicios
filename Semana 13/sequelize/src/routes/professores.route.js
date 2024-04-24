const { Router } = require('express');
const { auth } = require('../middleware/auth');
const ProfessorController = require('../controllers/ProfessorController');

const professoresRoutes = new Router();

professoresRoutes.get('/:id?', auth, ProfessorController.listar)

professoresRoutes.post('/', ProfessorController.cadastrar)

professoresRoutes.put('/:id', auth, ProfessorController.atualizar)

professoresRoutes.delete('/:id', auth, ProfessorController.deletar)

module.exports = professoresRoutes
