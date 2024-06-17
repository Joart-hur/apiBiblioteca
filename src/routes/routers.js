const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunoController')
const EditoraController = require('../controllers/editoraController')
const EmprestimoController = require('../controllers/emprestimoController')
const FuncionarioController = require('../controllers/funcionarioController')
const LivroController = require('../controllers/livroController')

router.post('/aluno', AlunoController.novoAluno)
router.get('/alunoPesquisar', AlunoController.pesquisarAluno)
//router.get('/aluno', AlunoController.pesquisarAll)

router.post('/editora', EditoraController.novaEditora)
router.get('/editora', EditoraController.pesquisarEditora)
//router.get('/editora', EditoraController.pesquisarAll)

router.post('/emprestimo', EmprestimoController.novoEmprestimo)
router.get('/emprestimo', EmprestimoController.pesquisarEmprestimo)
//router.get('/emprestimo', EmprestimoController.pesquisarAll)

router.post('/funcionario', FuncionarioController.novoFuncionario)
router.get('/funcionario', FuncionarioController.pesquisarFuncionario)
//router.get('/funcionario', FuncionarioController.pesquisarAll)

router.post('/livro', LivroController.novoLivro)
router.get('/livro', LivroController.pesquisarLivro)
//router.get('/livro', LivroController.pesquisarAll)

module.exports = router

