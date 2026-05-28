# Aqui você colará toda a criação do banco de dados

CREATE TABLE funcionarios (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  nome      VARCHAR(100) NOT NULL,
  cargo     VARCHAR(100) NOT NULL,
  salario   DECIMAL(10,2) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);