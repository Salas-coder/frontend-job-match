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

// Percorre todas as vagas disponiveis
for (var i = 0; i < vagas.length; i++) {
  var vaga = vagas[i];

  var habilidadesEncontradas = [];
  var habilidadesFaltantes = [];

  // Percorre as habilidades pedidas pela vaga
  for (var j = 0; j < vaga.habilidades.length; j++) {
    var habilidadeDaVaga = vaga.habilidades[j];
    var encontrou = false;

    // Compara a habilidade da vaga com as habilidades do candidato
    for (var k = 0; k < candidato.habilidades.length; k++) {
      var habilidadeDoCandidato = candidato.habilidades[k];

      if (habilidadeDaVaga === habilidadeDoCandidato) {
        encontrou = true;
      }
    }

    // Guarda a habilidade como encontrada ou faltante
    if (encontrou === true) {
      habilidadesEncontradas.push(habilidadeDaVaga);
    } else {
      habilidadesFaltantes.push(habilidadeDaVaga);
    }
  }

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

  // Mostra o resultado organizado no console
  console.log("-----------------------------");
  console.log("Empresa: " + vaga.empresa);
  console.log("Cargo: " + vaga.cargo);
  console.log("Cidade: " + vaga.cidade);
  console.log("Compatibilidade: " + porcentagem.toFixed(0) + "%");
  console.log("Classificacao: " + classificacao);
  console.log("Habilidades encontradas:");
  console.log(habilidadesEncontradas);
  console.log("Habilidades faltantes:");
  console.log(habilidadesFaltantes);
}