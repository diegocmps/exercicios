const { Router } = require('express');
const Aluno = require('../models/Aluno');
const Curso = require('../models/Curso');
const Professor = require('../models/Professor');

const routes = new Router();

routes.get('/bem_vindo', (req, res) => {
    res.json({ name: 'Bem vindo' });
});

//Alunos

routes.post('/alunos', async (req, res) => {

    try {
        const nome = req.body.nome
        const data_nascimento = req.body.data_nascimento
        const celular = req.body.celular

        if (!nome) {
            return res.status(400).json({ message: "O nome é obrigatório." })
        }

        if (!data_nascimento) {
            return res.status(400).json({ message: "A data de nascimento é obrigatória." })
        }

        if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ message: "A data de nascimento não está no formato correto." })
        }

        const aluno = await Aluno.create({
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular
        })

        res.status(201).json(aluno)

    } catch (error) {
        console.log(error.mesage)
        res.status(500).json({ message: "Não foi possível cadastrar o aluno." })

    }
})

routes.get('/alunos', async (req, res) => {
    const alunos = await Aluno.findAll()

    res.json(alunos)
})

//Cursos

routes.post('/cursos', async (req, res) => {

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

routes.get('/cursos', async (req, res) => {

    let params = {}

    if (req.query.nome) {
        params = { ...params, nome: req.query.nome }
    }

    const cursos = await Curso.findAll({
        where: params
    })

    res.json(cursos)
})

routes.delete('/cursos/:id', async (req, res) => {

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

routes.put('/cursos/:id', async (req, res) => {
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

//Professor

routes.post('/professor', async (req, res) => {

    try {
        const {nome} = req.body
        const {data_nascimento} = req.body
        const {disciplina} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome é obrigatório." })
        }

        if (!data_nascimento) {
            return res.status(400).json({ message: "A data de nascimento é obrigatória." })
        }

        if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ message: "A data de nascimento não está no formato correto." })
        }

        const professor = await Professor.create({
            nome,
            data_nascimento,
            disciplina
        })

        res.status(201).json(professor)

    } catch (error) {
        console.log(error.mesage)
        res.status(500).json({ message: "Não foi possível cadastrar o professor." })

    }
})

routes.get('/professor', async (req, res) => {
    const professor = await Professor.findAll()

    res.json(professor)
})

routes.delete('/professor/:id', async (req, res) => {

    const { id } = req.params


    const professor = await Professor.findByPk(id)

    if (!professor) {
        return res.status(404).json({ error: "Não encontrado." })
    }

    await Professor.destroy({
        where: {
            id: id
        }
    })
    res.status(204).json({})
})

routes.put('/professor/:id', async (req, res) => {
    const { id } = req.params
    const data = req.body

    try {
        const [updated] = await Professor.update(
            data,
            { where: { id: id } }
        )

        if (!updated) {
            return res.status(400).json({ error: "Não encontrado." })
        }

        res.status(200).json({ message: "Atualizado com sucesso." })

    } catch (error) {
        console.error("Erro ao atualizar:", error)
        res.status(500).json({ error: "Erro ao atualizar." })

    }

})




module.exports = (routes);