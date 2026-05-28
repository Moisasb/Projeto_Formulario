require('dotenv').config();

const express = require('express');
const path    = require('path');

const funcionariosRoutes = require('./routes/funcionariosRoutes');

const app  = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/funcionarios', funcionariosRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro-funcionario.html'));
});

app.get('/sucesso', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro-funcionario.html'));
});

app.use((req, res) => {
  res.status(404).json({ sucesso: false, mensagem: 'Rota não encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});