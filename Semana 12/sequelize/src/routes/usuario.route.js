const { Router } = require("express");
const Usuario = require("../models/Usuario");
const { auth } = require("../Middleware/Auth");


const usuarioRoute = new Router()

usuarioRoute.get('/', auth, async (req, res) => {

    try {
        const usuario = await Usuario.findAll()

        res.json(usuario)

    } catch (error) {
        res.status(500).json({ message: "Não foi possível listar os usuários." })
    }

})

usuarioRoute.get('/alunos', async (req, res) => {
    try {

        const alunos = await Usuario.findAll({where: { tipo: 'Aluno' }});

        res.status(200).json(alunos);
    } catch (error) {

        console.log(error.message)
        res.status(500).json({ message: "Erro ao buscar alunos." });
    }
});

usuarioRoute.get('/professores', async (req, res) => {
    try {

        const professores = await Usuario.findAll({where: { tipo: 'Professor' }});

        res.status(200).json(professores);
    } catch (error) {

        res.status(500).json({ message: "Erro ao buscar professores." });
    }
});

usuarioRoute.post('/', async (req, res) => {

    try {

        const { email } = req.body
        const { password } = req.body
        const { nome } = req.body
        const { data_nascimento } = req.body
        const { celular } = req.body
        const { tipo } = req.body


        if (!email) {
            return res.status(400).json({ message: "O email é obrigatório." })
        }

        if (!password) {
            return res.status(400).json({ message: "A senha é obrigatória." })
        }

        if (!nome) {
            return res.status(400).json({ message: "O nome é obrigatório." })
        }

        if (!data_nascimento) {
            return res.status(400).json({ message: "A data de nascimento é obrigatória." })
        }

        if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ message: "A data de nascimento não está no formato correto." })
        }

        if (!tipo) {
            return res.status(400).json({ message: "O tipo é obrigatório." })
        }

        const usuario = await Usuario.create({

            email: email,
            password: password,
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular,
            tipo: tipo
        })

        res.status(201).json({ message: "Usuário criado com sucesso." })


    } catch (error) {

        res.status(500).json({ message: "Não foi possível cadastrar o usuário." })

    }

})

usuarioRoute.put('/:id', auth, async (req, res) => {
    const { id } = req.params
    const data = req.body

    try {
        const [updated] = await Usuario.update(
            data,
            { where: { id: id } }
        )

        if (!updated) {
            return res.status(400).json({ error: "Usuário não encontrado." })
        }

        res.status(200).json({ message: "Usuário atualizado com sucesso." })

    } catch (error) {

        res.status(500).json({ error: "Erro ao atualizar o usuário." })

    }
})

usuarioRoute.delete('/:id', auth, async (req, res) => {

    const { id } = req.params


    const usuario = await Usuario.findByPk(id)

    if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado." })
    }

    await Usuario.destroy({
        where: {
            id: id
        }
    })
    res.status(204).json({})
})

module.exports = usuarioRoute