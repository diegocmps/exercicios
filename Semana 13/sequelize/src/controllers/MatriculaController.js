const Aluno = require("../models/Aluno")
const Matricula = require("../models/Matricula")

class MatriculaController {

    async listar(req, res) {
        const matricula = await Matricula.findAll()

        res.json(matricula)
    }

    async cadastrar(req, res) {

        try {
            const { curso_id } = req.body
            const { aluno_id } = req.body

            if (!curso_id || !aluno_id) {
                return res.status(400).json({ message: "Id do Aluno e do Curso são obrigatórios." })
            }

            const aluno = await Aluno.findByPk(aluno_id)

            if(!aluno){
                return res.status(404).json({message: "Aluno não encontrado."})
            }

            const matricula = await Matricula.create({
                curso_id: curso_id,
                aluno_id: aluno_id
            })

            res.status(201).json(matricula)


        } catch (error) {
            res.status(500).json({ message: "Não foi possível realizar o cadastro." })
        }
    }
}

module.exports = new MatriculaController()