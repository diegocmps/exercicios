const Professor = require("../models/Professor")


class ProfessorController {

    async listar(req, res){
        try {

            const { id } = req.params
            const { nome } = req.query
    
            if (id) {
                const aluno = await Professor.findByPk(id)
    
                if (!aluno) {
                    return res.status(404).json({ message: "Professor não encontrado." })
                }
    
                return res.json(aluno)
    
            } else if (nome) {
    
                const aluno = await Professor.findAll({
                    where: {
                        nome: nome
                    }
                })
    
                return res.json(aluno)
            }
            else {
                const aluno = await Professor.findAll()
    
                res.json(aluno)
            }
    
    
        } catch (error) {
    
            res.status(500).json({ message: "Houve um erro ao tentar listar os professor." })
    
        }

    }

    async cadastrar(req, res){
        try {

            const { nome } = req.body
            const { data_nascimento } = req.body
            const { disciplina } = req.body
            const { celular } = req.body
    
            if (!nome) {
                return res.status(400).json({ message: "O nome do professor é obrigatório." })
            }
    
            if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
                return res.status(400).json({ message: "A data de nascimento não está no formato correto." })
            }
    
            if (!celular.match(/^\d{9}$/)) {
                return res.status(400).json({ message: "Insira um número de celular válido." })
            }
    
            const professor = await Professor.create({
                nome: nome,
                data_nascimento: data_nascimento,
                disciplina: disciplina,
                celular: celular
            })
    
            res.json(professor)
    
        } catch (error) {
    
            console.log(error.message)
    
            res.status(500).json({ message: "Houve um erro ao tentar cadastrar o professor." })
    
        }

    }

    async atualizar(req, res){
        try {
            const { id } = req.params
            const data = req.body
    
            const professor = await Professor.findByPk(id)
    
            if (!professor) {
                return res.status(404).json({ message: "Professor não localizado." })
            }
    
            const [updated] = await Professor.update(
                data,
                { where: { id: id } }
            )
    
            if (!updated) {
                res.status(404).json({ message: "Não encontrado" })
            }
    
            res.status(200).json({ message: "Dados atualizados com sucesso." })
    
    
        } catch (error) {
    
            res.status(500).json({ message: "Houve um erro ao tentar atualizar os dados." })
    
        }

    }

    async deletar(req, res){
        try {

            const { id } = req.params
    
            const professor = await Professor.findByPk(id)
    
            if (!professor) {
                return res.status(404).json({ message: "Professor não encontrado" })
            }
    
            await Professor.destroy({
                where: {
                    id: id
                }
            })
    
    
            res.status(204).json({})
    
        } catch (error) {
    
            res.status(500).json({ message: "Ocorreu um erro ao tentar excluir o professor" })
        }

    }

}

module.exports = new ProfessorController