const database = require('../database/connection')
class LivroController{
    novoAluno(req, res){
        const {matricula, nome, sexo } = req.body
        console.log(matricula, nome, sexo)

        const Aluno = { matricula: matricula, nome: nome, sexo: sexo}

        database.query('INSERT INTO LIVRO SET ?', Aluno, (err, res)=>{
            if(err) throw err
            res.json({message: "Aluno Cadastrado com sucesso"})
        } )       
    }

    async pesquisarAluno(req, res){
        const [rows] = await database.query('SELECT * FROM livro');
        return res.status(200).json({alunos:rows})
    }
}

module.exports = new LivroController()