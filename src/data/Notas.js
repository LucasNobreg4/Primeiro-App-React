class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}

export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._incritos = [];
  }
  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
  }

  apagarNotas(indice) {
    let index = indice;
    this.notas.splice(index, 1);
  }

  inscrever(func) {
    this._incritos.push(func);
  }
  notificar() {
    this._incritos.forEach((func) => func(this.categorias));
  }
}
