const Aluno = require("./alunos.js")
const Turma = require("./turma.js")
const TurmaPresencial = require("./turma_presencial.js")

 
// Exemplo de uso das classes
let aluno1 = new Aluno("João", "123456", "joao123");
let turma1 = new Turma("T1", 7);
let turmaPresencial1 = new TurmaPresencial("T2", 6, 80);

console.log(aluno1);
console.log(turma1.aprovado()); // Saída: true
console.log(turmaPresencial1.aprovado()); // Saída: true