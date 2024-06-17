const database = require('../database/connection')
class EmprestimoController{
    novoAluno(req, res){
        const {codigo, tipo, nome, livro, dtemprestimo, dtdevolucao } = req.body
        console.log(codigo, tipo, nome, livro, dtemprestimo, dtdevolucao)

        const Aluno = { codigo: cod_aluguel, tipo: tipo, nome: nome, livro: livro, dtemprestimo: dtemprestimo, dtdevolucao: dtdevolucao}

        database.query('INSERT INTO emprestimo SET ?', Emprestimo, (err, res)=>{
            if(err) throw err
            res.json({message: "Emprestimo Cadastrado com sucesso"})
        } )       
    }

    async pesquisarAluno(req, res){
        const [rows] = await database.query('SELECT * FROM emprestimo');
        return res.status(200).json({alunos:rows})
    }
}

module.exports = new EmprestimoController()