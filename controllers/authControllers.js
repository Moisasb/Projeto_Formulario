import pool from '../config/database.js';

const cadastrarFuncionario = async (req, res) => {
  const { nome, cargo, salario } = req.body;

  // Validação
  const erros = [];

  if (!nome || nome.trim() === '')
    erros.push('O campo "Nome" é obrigatório.');

  if (!cargo || cargo.trim() === '')
    erros.push('O campo "Cargo" é obrigatório.');

  if (salario === undefined || salario === null || salario === '')
    erros.push('O campo "Salário" é obrigatório.');
  else if (isNaN(Number(salario)) || Number(salario) < 0)
    erros.push('O campo "Salário" deve ser um número válido e não negativo.');

  if (erros.length > 0) {
    return res.status(400).json({
      sucesso: false,
      mensagem: 'Dados inválidos. Verifique os campos e tente novamente.',
      erros,
    });
  }

  // INSERT
  try {
    const sql = `
      INSERT INTO funcionarios (nome, cargo, salario)
      VALUES (?, ?, ?)
    `;

    const valores = [
      nome.trim(),
      cargo.trim(),
      parseFloat(Number(salario).toFixed(2)),
    ];

    const [resultado] = await pool.execute(sql, valores);

    return res.status(201).json({
      sucesso: true,
      mensagem: 'Funcionário cadastrado com sucesso!',
      dados: {
        id:      resultado.insertId,
        nome:    nome.trim(),
        cargo:   cargo.trim(),
        salario: parseFloat(Number(salario).toFixed(2)),
      },
    });

  } catch (err) {
    console.log('Erro ao cadastrar funcionário:', err);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno do servidor. Tente novamente mais tarde.',
    });
  }
};

const listarFuncionarios = async (_, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, nome, cargo, salario, criado_em FROM funcionarios ORDER BY criado_em DESC'
    );
    return res.status(200).json({ sucesso: true, total: rows.length, dados: rows });
  } catch (err) {
    console.log('Erro ao listar funcionários:', err);
    return res.status(500).json({ sucesso: false, mensagem: 'Erro interno do servidor.' });
  }
};

export { cadastrarFuncionario, listarFuncionarios };