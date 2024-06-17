const database = require('../database/connection')
class EditoraController{
    novoAluno(req, res){
        const { nome_edit, email, gerente_edit } = req.body
        console.log( nome_edit, email, gerente_edit)

        const Editora = { nome_edit: nome, email: email, gerente_edit: gerente }

        database.query('INSERT INTO editora SET ?', Editora, (err, res)=>{
            if(err) throw err
            res.json({message: "Editora Cadastrado com sucesso"})
        } )       
    }

    async pesquisarAluno(req, res){
        const [rows] = await database.query('SELECT * FROM editora');
        return res.status(200).json({alunos:rows})
    }
}

module.exports = new EditoraController()