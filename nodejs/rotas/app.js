//Importa o módulo http do NODE.js
import http from 'http';

//Define a porta onde o servidor irá escutar
const port = 3000;

//Cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //Define o cabeçalho da resposta
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //Roteamento básico
    if (url === '/') {
        response.statusCode = 200; //ok
        response.end('<h1>Bem-vindo à página inicial!</h1>');

    }else if (url === '/sobre') {
        response.statusCode = 200; //ok
        response.end('<h1>Sobre nós</h1>');

    }else if (url === '/contato') {
        response.statusCode = 200; //ok
        response.end('<h1>Fale conosco</h1>');
       
    }
    else {
        response.statusCode = 404; //Not Found
        response.end('<h1>Página não encontrada</h1>');
    }
});

//Inicia o servidor e escuta na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});