// SkillMatch JS
// Projeto para comparar um candidato com vagas de Front-End Junior

// Array que guarda as informacoes dos candidatos
var candidatos = [
  {
    nome: "Lucas",
    idade: 20,
    area: "Front-End",
    nivel: "Junior",
    cidade: "Sao Paulo",
    habilidades: ["HTML", "CSS", "JavaScript"]
  },
  {
    nome: "Mariana",
    idade: 22,
    area: "Front-End",
    nivel: "Junior",
    cidade: "Rio de Janeiro",
    habilidades: ["HTML", "CSS", "Git"]
  },
  {
    nome: "Pedro",
    idade: 19,
    area: "Front-End",
    nivel: "Junior",
    cidade: "Remoto",
    habilidades: ["HTML", "JavaScript", "React"]
  }
];

// Classe que representa uma vaga de emprego
class Vaga {
  // O constructor recebe os dados da vaga
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  // Metodo que mostra um resumo simples da vaga
  mostrarResumo() {
    return this.cargo + " - " + this.empresa + " - " + this.modalidade;
  }

  // Metodo que calcula a compatibilidade da vaga com o candidato
  calcularCompatibilidade(candidato) {
    var habilidadesEncontradas = this.requisitos.filter(function (requisito) {
      return candidato.habilidades.includes(requisito);
    });

    var habilidadesFaltantes = this.requisitos.filter(function (requisito) {
      return !candidato.habilidades.includes(requisito);
    });

    var totalDeRequisitos = this.requisitos.length;
    var totalEncontradas = habilidadesEncontradas.length;
    var porcentagem = (totalEncontradas / totalDeRequisitos) * 100;

    var classificacao = "";

    if (porcentagem >= 80 && porcentagem <= 100) {
      classificacao = "Alta compatibilidade";
    } else if (porcentagem >= 50 && porcentagem < 80) {
      classificacao = "Media compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    return {
      empresa: this.empresa,
      cargo: this.cargo,
      requisitos: this.requisitos,
      salario: this.salario,
      modalidade: this.modalidade,
      nivel: this.nivel,
      resumo: this.mostrarResumo(),
      porcentagem: porcentagem,
      classificacao: classificacao,
      habilidadesEncontradas: habilidadesEncontradas,
      habilidadesFaltantes: habilidadesFaltantes
    };
  }
}

// Classe VagaFrontEnd herda os dados e metodos da classe Vaga
class VagaFrontEnd extends Vaga {
  // O constructor recebe os dados da vaga de Front-End
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  // Metodo simples para mostrar o nivel da vaga
  mostrarNivel() {
    return "Nivel da vaga: " + this.nivel;
  }
}

// Funcao que simula o carregamento das vagas de um servidor
function carregarVagas() {
  console.log("Carregando vagas...");

  return new Promise(function (resolve) {
    setTimeout(function () {
      var vagas = [
        new VagaFrontEnd("Tech Start", "Front-End Junior", ["HTML", "CSS", "JavaScript"], 2500, "Presencial", "Junior"),
        new VagaFrontEnd("Web Studio", "Desenvolvedor Front-End Junior", ["HTML", "CSS", "Git"], 2200, "Hibrido", "Junior"),
        new VagaFrontEnd("Code House", "Programador Front-End Junior", ["HTML", "JavaScript", "React"], 2800, "Remoto", "Junior")
      ];

      resolve(vagas);
    }, 2000);
  });
}

// Funcao callback que mostra uma mensagem final para o candidato
function mostrarMensagemFinal(candidato, melhorVaga) {
  console.log("Analise finalizada para " + candidato.nome + ".");
  console.log("A vaga recomendada foi: " + melhorVaga.cargo + " na empresa " + melhorVaga.empresa + ".");
}

// Funcao que recebe outra funcao como parametro
function finalizarAnalise(candidato, melhorVaga, callback) {
  console.log("-----------------------------");
  callback(candidato, melhorVaga);
}

// Closure que cria um contador de analises realizadas
function criarContadorDeAnalises() {
  var totalDeAnalises = 0;

  return function () {
    totalDeAnalises++;
    return totalDeAnalises;
  };
}

// Funcao que analisa todos os candidatos depois que as vagas foram carregadas
function analisarCandidatos(vagas) {
  // Guarda a funcao que vai contar as analises
  var contarAnalise = criarContadorDeAnalises();

  // Array que vai guardar o resumo final de todos os candidatos
  var resumoFinal = [];

  // Percorre todos os candidatos automaticamente
  for (var c = 0; c < candidatos.length; c++) {
    var candidato = candidatos[c];

    console.log("=============================");
    console.log("Candidato: " + candidato.nome);
    console.log("Cidade: " + candidato.cidade);
    console.log("Habilidades:");
    console.log(candidato.habilidades);

    // O map cria um novo array com o resultado de cada vaga para o candidato atual
    var resultados = vagas.map(function (vaga) {
      return vaga.calcularCompatibilidade(candidato);
    });

    // Mostra o resultado de cada vaga no console
    for (var i = 0; i < resultados.length; i++) {
      var resultado = resultados[i];

      console.log("-----------------------------");
      console.log("Resumo da vaga: " + resultado.resumo);
      console.log("Empresa: " + resultado.empresa);
      console.log("Cargo: " + resultado.cargo);
      console.log("Nivel: " + resultado.nivel);
      console.log("Salario: R$ " + resultado.salario);
      console.log("Modalidade: " + resultado.modalidade);
      console.log("Compatibilidade: " + resultado.porcentagem.toFixed(0) + "%");
      console.log("Classificacao: " + resultado.classificacao);
      console.log("Habilidades encontradas:");
      console.log(resultado.habilidadesEncontradas);
      console.log("Habilidades faltantes:");
      console.log(resultado.habilidadesFaltantes);
    }

    // O reduce encontra a vaga com maior compatibilidade para o candidato atual
    var melhorVaga = resultados.reduce(function (melhor, atual) {
      if (atual.porcentagem > melhor.porcentagem) {
        return atual;
      } else {
        return melhor;
      }
    });

    // Mostra a vaga com maior compatibilidade
    console.log("-----------------------------");
    console.log("Melhor vaga para " + candidato.nome);
    console.log("Resumo da vaga: " + melhorVaga.resumo);
    console.log("Empresa: " + melhorVaga.empresa);
    console.log("Cargo: " + melhorVaga.cargo);
    console.log("Nivel: " + melhorVaga.nivel);
    console.log("Compatibilidade: " + melhorVaga.porcentagem.toFixed(0) + "%");

    // Guarda a melhor vaga do candidato para mostrar no resumo final
    resumoFinal.push({
      candidato: candidato.nome,
      empresa: melhorVaga.empresa,
      cargo: melhorVaga.cargo,
      porcentagem: melhorVaga.porcentagem
    });

    // Gera uma recomendacao de estudo baseada nas habilidades faltantes
    console.log("Recomendacao de estudo:");

    if (melhorVaga.habilidadesFaltantes.length === 0) {
      console.log("Voce ja possui todas as habilidades pedidas para essa vaga.");
      console.log("Continue praticando projetos com " + melhorVaga.habilidadesEncontradas[0] + ".");
    } else {
      console.log("Para melhorar sua compatibilidade, estude:");
      console.log(melhorVaga.habilidadesFaltantes);
      console.log("Sugestao: comece estudando " + melhorVaga.habilidadesFaltantes[0] + ".");
    }

    // Chama a funcao que usa callback para finalizar a analise
    finalizarAnalise(candidato, melhorVaga, mostrarMensagemFinal);

    // Usa o closure para contar quantas analises ja foram feitas
    var numeroDaAnalise = contarAnalise();
    console.log("Numero da analise realizada: " + numeroDaAnalise);
  }

  // Mostra um resumo final com a melhor vaga de cada candidato
  console.log("=============================");
  console.log("Resumo final dos candidatos");

  for (var r = 0; r < resumoFinal.length; r++) {
    var resumo = resumoFinal[r];

    console.log("-----------------------------");
    console.log("Candidato: " + resumo.candidato);
    console.log("Melhor vaga: " + resumo.cargo);
    console.log("Empresa: " + resumo.empresa);
    console.log("Compatibilidade: " + resumo.porcentagem.toFixed(0) + "%");
  }
}

// Funcao principal que inicia o sistema usando async/await
async function iniciarSistema() {
  var vagas = await carregarVagas();

  console.log("Vagas carregadas com sucesso!");
  console.log("Vagas carregadas:");
  console.log(vagas);

  analisarCandidatos(vagas);
}

// Chama a funcao principal do sistema
iniciarSistema();
