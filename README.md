# Frontend-Job-Match

Simulador em JavaScript puro que analisa a compatibilidade entre candidatos e vagas de Front-End Junior.

## 1. Objetivo do projeto

O objetivo do projeto e comparar candidatos com vagas ficticias de Front-End Junior.

O sistema verifica as habilidades de cada candidato, compara com os requisitos de cada vaga e calcula uma porcentagem de compatibilidade.

No final, o sistema mostra qual e a melhor vaga para cada candidato e tambem apresenta uma recomendacao de estudo baseada nas habilidades faltantes.

## 2. Como executar o projeto

O projeto pode ser executado com Node.js pelo terminal.

Passos para executar:

1. Abrir a pasta do projeto no terminal.
2. Executar o comando:

```bash
node skill-match.js
```

Tambem e possivel executar o codigo no navegador:

1. Abrir o navegador.
2. Apertar F12 para abrir as ferramentas de desenvolvedor.
3. Entrar na aba Console.
4. Copiar o codigo do arquivo `skill-match.js`.
5. Colar no console e executar.

## 3. Conceitos de logica aplicados

Neste projeto foram usados os seguintes conceitos:

- Logica de programacao
- Variaveis
- Arrays
- Objetos
- Condicionais com `if/else`
- Lacos de repeticao com `for`
- Funcoes
- Operadores matematicos
- Comparacao de dados
- Manipulacao de arrays
- Porcentagem
- Organizacao de resultados no console

## 4. Metodos de array utilizados

O projeto utiliza pelo menos tres metodos de array:

- `map`: usado para criar um novo array com o resultado da compatibilidade de cada vaga.
- `filter`: usado para separar habilidades encontradas e habilidades faltantes.
- `reduce`: usado para encontrar a vaga com maior compatibilidade para cada candidato.

## 5. Programacao Orientada a Objetos

O projeto tambem aplica conceitos basicos de Programacao Orientada a Objetos.

Foram criadas duas classes:

- `Vaga`: representa uma vaga de emprego.
- `VagaFrontEnd`: representa uma vaga especifica de Front-End e herda da classe `Vaga`.

Conceitos usados:

- Classe
- Constructor
- Atributos
- Metodos
- `this`
- Heranca com `extends`
- Uso de `super()`

## 6. Funcoes avancadas usadas no projeto

O projeto tambem inclui alguns conceitos importantes de JavaScript:

- Callback: usado para mostrar uma mensagem final depois da analise de cada candidato.
- Closure: usado para criar um contador de analises realizadas.
- Promise: usada para simular o carregamento das vagas como se viessem de um servidor.
- `setTimeout`: usado para simular o tempo de carregamento.
- `async/await`: usado para esperar as vagas carregarem antes de iniciar a analise.

## 7. Resumo do funcionamento

O sistema segue esta ordem:

1. Carrega as vagas com uma Promise.
2. Espera as vagas usando `async/await`.
3. Compara cada candidato com todas as vagas.
4. Calcula a compatibilidade em porcentagem.
5. Classifica a compatibilidade como alta, media ou baixa.
6. Mostra habilidades encontradas e faltantes.
7. Encontra a melhor vaga para cada candidato.
8. Mostra uma recomendacao de estudo.
9. Exibe um resumo final com a melhor vaga de cada candidato.

## 8. Classificacao da compatibilidade

A classificacao segue esta regra:

- 80% a 100%: Alta compatibilidade
- 50% a 79%: Media compatibilidade
- 0% a 49%: Baixa compatibilidade

## 9. Arquivo principal

O arquivo principal do projeto e:

```text
skill-match.js
```

## 10. Atividade

Projeto desenvolvido como atividade da disciplina SCTEC.

Planejamento do projeto no Trello:

```text
https://trello.com/b/WP57Ry1c/sctec-front-end-match
```

Repositorio do projeto no GitHub:

```text
https://github.com/Salas-coder/frontend-job-match
```

Video Explicação do Projeto Front-End Match
```text
https://drive.google.com/file/d/16VxOwhi3Sa7Tk7LDApzczsU15Vb14jCk/view?usp=drive_link
```
