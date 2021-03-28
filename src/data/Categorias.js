export default class Categorias {
  constructor() {
    this.categorias = [];
    this._incritos = [];
  }

  inscrever(func) {
    this._incritos.push(func);
  }
  notificar() {
    this._incritos.forEach((func) => func(this.categorias));
  }

  adicionarCategoria(novaCategoria) {
    this.Categorias.push(novaCategoria);
  }
}
