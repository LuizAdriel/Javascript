module.exports = {

    clientes: ( req, res ) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    

};
// clientesController.js

// Função para validar login de cliente
function loginCliente(req, res) {
  const { email, senha } = req.body;

  // Exemplo simples (substitua por consulta ao banco de dados)
  const clienteFake = {
    email: 'cliente@exemplo.com',
    senha: '1234'
  };

  if (email === clienteFake.email && senha === clienteFake.senha) {
    res.send(`<h1>Bem-vindo, ${email}!</h1><p>Login realizado com sucesso.</p>`);
  } else {
    res.status(401).send(`<h1>Falha no login</h1><p>Email ou senha incorretos.</p>`);
  }
}

module.exports = {
  loginCliente
};
