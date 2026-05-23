// SkillMatch JS
// Projeto para comparar um candidato com vagas de Front-End Junior

// Objeto que guarda as informacoes do candidato
var candidato = {
  nome: "Lucas",
  idade: 20,
  area: "Front-End",
  nivel: "Junior",
  cidade: "Sao Paulo",
  habilidades: ["HTML", "CSS", "JavaScript"]
};

// Array que guarda as vagas ficticias de Front-End Junior
var vagas = [
  {
    empresa: "Tech Start",
    cargo: "Front-End Junior",
    cidade: "Sao Paulo",
    habilidades: ["HTML", "CSS", "JavaScript"]
  },
  {
    empresa: "Web Studio",
    cargo: "Desenvolvedor Front-End Junior",
    cidade: "Rio de Janeiro",
    habilidades: ["HTML", "CSS", "Git"]
  },
  {
    empresa: "Code House",
    cargo: "Programador Front-End Junior",
    cidade: "Remoto",
    habilidades: ["HTML", "JavaScript", "React"]
  }
];

// O map cria um novo array com o resultado de cada vaga
var resultados = vagas.map(function (vaga) {
  // O filter cria um array apenas com as habilidades que o candidato possui
  var habilidadesEncontradas = vaga.habilidades.filter(function (habilidade) {
    return candidato.habilidades.includes(habilidade);
  });

  // O filter tambem cria um array com as habilidades que o candidato ainda nao possui
  var habilidadesFaltantes = vaga.habilidades.filter(function (habilidade) {
    return !candidato.habilidades.includes(habilidade);
  });

  // Calcula a porcentagem de compatibilidade
  var totalDeHabilidades = vaga.habilidades.length;
  var totalEncontradas = habilidadesEncontradas.length;
  var porcentagem = (totalEncontradas / totalDeHabilidades) * 100;

  // Classifica a compatibilidade usando if/else
  var classificacao = "";

  if (porcentagem >= 80 && porcentagem <= 100) {
    classificacao = "Alta compatibilidade";
  } else if (porcentagem >= 50 && porcentagem < 80) {
    classificacao = "Media compatibilidade";
  } else {
    classificacao = "Baixa compatibilidade";
  }

  // Retorna um objeto com os dados da vaga e o resultado da comparacao
  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    cidade: vaga.cidade,
    porcentagem: porcentagem,
    classificacao: classificacao,
    habilidadesEncontradas: habilidadesEncontradas,
    habilidadesFaltantes: habilidadesFaltantes
  };
});

// Mostra o resultado de cada vaga no console
for (var i = 0; i < resultados.length; i++) {
  var resultado = resultados[i];

  console.log("-----------------------------");
  console.log("Empresa: " + resultado.empresa);
  console.log("Cargo: " + resultado.cargo);
  console.log("Cidade: " + resultado.cidade);
  console.log("Compatibilidade: " + resultado.porcentagem.toFixed(0) + "%");
  console.log("Classificacao: " + resultado.classificacao);
  console.log("Habilidades encontradas:");
  console.log(resultado.habilidadesEncontradas);
  console.log("Habilidades faltantes:");
  console.log(resultado.habilidadesFaltantes);
}

// O reduce encontra a vaga com maior compatibilidade
var melhorVaga = resultados.reduce(function (melhor, atual) {
  if (atual.porcentagem > melhor.porcentagem) {
    return atual;
  } else {
    return melhor;
  }
});

// Mostra a vaga com maior compatibilidade
console.log("=============================");
console.log("Vaga com maior compatibilidade");
console.log("Empresa: " + melhorVaga.empresa);
console.log("Cargo: " + melhorVaga.cargo);
console.log("Compatibilidade: " + melhorVaga.porcentagem.toFixed(0) + "%");

// Gera uma recomendacao de estudo baseada nas habilidades faltantes
console.log("-----------------------------");
console.log("Recomendacao de estudo:");

if (melhorVaga.habilidadesFaltantes.length === 0) {
  console.log("Voce ja possui todas as habilidades pedidas para essa vaga.");
  console.log("Continue praticando projetos com " + melhorVaga.habilidadesEncontradas[0] + ".");
} else {
  console.log("Para melhorar sua compatibilidade, estude:");
  console.log(melhorVaga.habilidadesFaltantes);
  console.log("Sugestao: comece estudando " + melhorVaga.habilidadesFaltantes[0] + ".");
}
