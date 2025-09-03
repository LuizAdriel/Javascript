//importando o modulo os (operating system)
const os = require('os');

//exibindo informacoes do sistemaoperacional
//exibindo arquitetura do sistema
console.log('Arquitetura do sistema: ' + os.arch());
//exibindo a quantidade de CPUs
console.log('Quantidade de CPUs: ' + os.cpus().length); 
//exibindo o total de memoria em bytes
console.log('Total de memoria: ' + os.totalmem() + ' bytes');
//exibindo a memoria livre em bytes
console.log('Memoria livre: ' + os.freemem() + ' bytes');
//exibindo o sistema operacional
console.log(os.platform());