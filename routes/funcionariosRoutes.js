const express = require('express');
const router  = express.Router();

// Importa a função que você
const { cadastrarFuncionario } = require('../controllers/authControllers');

// Quando chegar um POST em /funcionarios, chama a função
router.post('/', cadastrarFuncionario);

module.exports = router;