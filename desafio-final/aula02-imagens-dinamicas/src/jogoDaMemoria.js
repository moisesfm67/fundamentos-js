class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela;

    this.heroisIniciais = [
      { img: "../arquivos/batman.png", nome: "batman" },
      { img: "../arquivos/deadpol.png", nome: "deadpol" },
      { img: "../arquivos/punisher.png", nome: "punisher" },
      { img: "../arquivos/spider.png", nome: "spider" },
    ];
  }

  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais);
  }
}
