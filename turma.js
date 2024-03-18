class Turma {
    #código;
    #nota;
  
    constructor(código, nota) {
      this.#código = código;
      this.#nota = nota;
    }
  
    aprovado() {
      return this.#nota >= 6;
    }
}

module.exports = Turma;