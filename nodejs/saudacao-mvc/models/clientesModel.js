const { login } = require("../controllers/clientesController");

module.exports = {

  gerarMensagemLogin: (login, senha) => {
    let acesso;

    if (login === "Joédio" && senha === "123456") {
      acesso = "liberado";
    } else {
      acesso = "negado";
    }
    return `olá, ${login}! seu acesso foi ${acesso}. `;
  }
}