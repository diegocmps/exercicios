const { sign } = require("jsonwebtoken")
const Aluno = require("../models/Aluno")
const { compare } = require("bcryptjs")


class LoginController {

    async login(req, res) {
        try {

            const email = req.body.email
            const password = req.body.password

            if (!email) {

                return res.status(400).json({ message: "O email é obrigatório." })
            }

            if (!password) {

                return res.status(400).json({ message: "O password é obrigatório." })
            }


            // Procura na tabela Aluno um aluno que corresponda com o email e senha fornecidos
            const aluno = await Aluno.findOne({
                where: {
                    email: email,
                }
            })



            if (!aluno) {
                return res.status(404).json({ message: "Não existe aluno com email e senha informado!" })
            }
            
            const hashSenha = await compare(password, aluno.password)

            if (hashSenha === false) {
                return res.status(403).json({ message: "E-mail ou senha incorretos." })
            }

            const payload = { sub: aluno.id, email: aluno.email, nome: aluno.nome }

            const token = sign(payload, process.env.SECRET_JWT)


            res.status(200).json({ Token: token })

        } catch (error) {
            return res.status(500).json({ error: error, message: "Algo inesperado aconteceu" })
        }
    }

}

module.exports = new LoginController