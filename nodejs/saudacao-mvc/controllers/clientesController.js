const clientesModel = require('../models/clientesModel');
const { index, formulario } = require('./siteController');

module.exports = {

  index: (req, res) => {
    res.sendFile('clientes.html', { root:  './views'});
  },

  formulario: (req, res) => {
    res.sendFile('formLogin.html' ,{ root: './views'});
},
login: (req, res) => {
  const { login, senha } = req.body;
  const mensagemLogin = clientesModel.gerarMensagemLogin(login, senha);
res.send('<h1>${mensagemLogin}</h1>'); }
}