const { Router } = require("express")
const Curso = require("../models/Curso")
const { auth } = require("../Middleware/Auth")


const cursoRoute = new Router()

cursoRoute.post('/', auth, async (req, res) => {

    try {

        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas

        if (!nome) {
            return res.status(400).json({ message: "O nome do curso é obrigatório" })
        }

        if (!(duracao_horas >= 40 && duracao_horas <= 200)) {
            return res.status(400).json({ message: "A duração do curso deve ser entre 40 e 200 horas." })
        }

        const cursos = await Curso.create({
            nome: nome,
            duracao_horas: duracao_horas
        })

        res.status(201).json(cursos)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Não foi possível cadastrar o curso." })
    }

})

cursoRoute.get('/', auth, async (req, res) => {

    let params = {}

    if (req.query.nome) {
        params = { ...params, nome: req.query.nome }
    }

    const cursos = await Curso.findAll({
        where: params
    })

    res.json(cursos)
})

cursoRoute.delete('/:id', auth, async (req, res) => {

    const { id } = req.params


    const cursos = await Curso.findByPk(id)

    if (!cursos) {
        return res.status(404).json({ error: "Não encontrado." })
    }

    await Curso.destroy({
        where: {
            id: id
        }
    })
    res.status(204).json({})
})

cursoRoute.put('/:id', auth, async (req, res) => {
    const { id } = req.params
    const data = req.body

    try {
        const [updated] = await Curso.update(
            data,
            { where: { id: id } }
        )

        if (!updated) {
            return res.status(400).json({ error: "Produto não encontrado." })
        }

        res.status(200).json({ message: "Produto atualizado com sucesso." })

    } catch (error) {
        console.error("Erro ao atualizar o produto:", error)
        res.status(500).json({ error: "Erro ao atualizar o produto." })

    }

})

module.exports = cursoRoute