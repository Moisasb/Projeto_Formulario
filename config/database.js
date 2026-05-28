const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro_funcionarios'
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:');
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = conexao;