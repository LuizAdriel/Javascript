//importe o express
import express from 'express';

const app = express();
const port = 3000;

//Middlweare para definir o cabeçalho da resposta como html
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

//Roteamento básico
app.get("/sobre", (req, res) => {
  res.send('<h1>Bem-vindo à página inicial!</h1>');
});

app.get("/contato", (req, res) => {
    res.status(200).send('h1>Página sobre>/h1>');
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Fale Conosco</h1>");
});

//Rota para lidar com páginas não encontradas
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



