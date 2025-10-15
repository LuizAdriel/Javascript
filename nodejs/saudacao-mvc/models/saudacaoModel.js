module.exports = {
  gerarMensagemPersonalizada: (nome, idade, genero) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! teu genero é ${genero}, e Você é um(a) ${faixaEtaria}.`;
  }
};
