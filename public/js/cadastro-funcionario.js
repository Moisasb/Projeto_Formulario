const parametros = new URLSearchParams(window.location.search);
const erro = parametros.get("erro");
const cadastro = parametros.get("cadastro");
const mensagem = document.getElementById("mensagem");

if (erro === "campos") {
  mensagem.innerHTML = `
    <div class="mensagem-erro">
      Preencha todos os campos antes de cadastrar.
    </div>
  `;
}

if (erro === "banco") {
  mensagem.innerHTML = `
    <div class="mensagem-erro">
      Ocorreu um erro ao salvar no banco de dados.
    </div>
  `;
}

if (cadastro === "sucesso") {
  mensagem.innerHTML = `
    <div class="mensagem-sucesso">
      Funcionário cadastrado com sucesso!
    </div>
  `;
}
