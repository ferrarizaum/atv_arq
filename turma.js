const TurmaPresencial = {
  metodoInterface: function () {
    throw new Error(
      "Este método deve ser implementado por classes que implementam a interface TurmaPresencial."
    );
  },
};

class Turma {
  constructor(nota, codigo) {
    this.nota = nota;
    this.codigo = codigo;
  }

  metodoInterface() {
    console.log("Método da interface implementado na classe Turma.");
  }
}

// Estendendo Turma com TurmaPresencial
Object.setPrototypeOf(Turma.prototype, TurmaPresencial);

module.exports = Turma;
