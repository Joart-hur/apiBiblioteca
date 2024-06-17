const database = require('../database/connection')
class FuncionarioController{
    novoAluno(req, res){
        const {nome, matricula, telefone, } = req.body
        console.log(matricula, nome, sexo)

        const Aluno = { matricula: matricula, nome: nome, sexo: sexo}

        database.query('INSERT INTO funcionario SET ?', Aluno, (err, res)=>{
            if(err) throw err
            res.json({message: "Aluno Cadastrado com sucesso"})
        } )       
    }

    async pesquisarAluno(req, res){
        const [rows] = await database.query('SELECT * FROM funcionario');
        return res.status(200).json({alunos:rows})
    }
}

module.exports = new FuncionarioController()