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

    this.tela.configurarBotaoJogar(this.jogar.bind(this));
  }

  embaralhar() {
    const copias = this.heroisIniciais
      .concat(this.heroisIniciais)
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      .sort(() => Math.random() - 0.5);

    this.tela.atualizarImagens(copias);
  }

  jogar() {
    this.embaralhar();
  }
}
