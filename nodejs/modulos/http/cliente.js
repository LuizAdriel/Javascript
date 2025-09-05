const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/2', (res) => {
    let data = '';
    //UM pedaço de dado foi recebido.
    res.on('data', (chunk) => {
        data += chunk;
    });

    //A resposta completa foi recebida. Imprime o resultado.
    res.on('end', () => {
        console.log('Resposta do servidor:', data);
    });

}).on('error', (err) => {
    console.error('Erro:', err.message);
});