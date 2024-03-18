const turma = require("./turma.js")

class TurmaPresencial extends turma {
    #frequência;
  
    constructor(código, nota, frequência) {
      super(código, nota);
      this.#frequência = frequência;
    }
  
    aprovado() {
      return super.aprovado() && this.#frequência >= 70;
    }
}

module.exports = TurmaPresencial;