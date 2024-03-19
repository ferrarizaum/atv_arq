const Aluno = require("./aluno");
const Turma = require("./turma");

const turma = new Turma(90, "TURMA123");
const aluno = new Aluno("João", "joao123", "RA123456", turma);

console.log(aluno.turma.nota);
