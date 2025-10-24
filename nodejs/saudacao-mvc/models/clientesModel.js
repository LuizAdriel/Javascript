// clientesModel.js

// Simulando um banco de dados (pode ser trocado por MySQL ou SQLite depois)
const clientes = [
  { id: 1, nome: "João Silva", email: "cliente@exemplo.com", senha: "1234" },
  { id: 2, nome: "Maria Souza", email: "maria@teste.com", senha: "abcd" }
];

// Função para buscar cliente por e-mail e senha
function buscarCliente(email, senha) {
  return clientes.find(c => c.email === email && c.senha === senha);
}

module.exports = { buscarCliente };
