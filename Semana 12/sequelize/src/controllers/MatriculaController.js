const Curso = require("../models/Curso")
const Matricula = require("../models/Matricula")
const Usuario = require("../models/Usuario")

class MatriculaController {

    async cadastrar(req, res) {

        try {
            const { curso_id } = req.body
            const { usuario_id } = req.body

            if (!curso_id || !usuario_id) {
                return res.status(400).json({ message: "O ID do aluno e do curso são obrigatórios." })
            }

            const usuario = Usuario.findByPk(usuario_id)

            if (!usuario) {
                return res.status(404).json({ message: "Usuário não existe." })
            }

            const curso = Curso.findByPk(curso_id)

            if (!curso) {
                return res.status(404).json({ message: "O curso não existe." })
            }

            const matricula = await Matricula.create({
                curso_id: curso_id,
                usuario_id: usuario_id
            })

            res.status(201).json({ matricula })

        } catch (error) {

            res.status(500).json({ message: "Não foi possível realizar a operação." })

        }
    }
}

module.exports = new MatriculaController