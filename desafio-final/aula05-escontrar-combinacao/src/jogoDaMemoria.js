class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela;

    this.heroisIniciais = [
      { img: "../arquivos/batman.png", nome: "batman" },
      { img: "../arquivos/deadpol.png", nome: "deadpol" },
      { img: "../arquivos/punisher.png", nome: "punisher" },
      { img: "../arquivos/spider.png", nome: "spider" },
    ];

    this.iconePadrao = "../arquivos/ninja.png";
    this.heroisEscondidos = [];
    this.heroisSelecionados = [];
  }

  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais);

    this.tela.configurarBotaoJogar(this.jogar.bind(this));

    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this));
  }

  embaralhar() {
    console.log("aoba");
    const copias = this.heroisIniciais
      .concat(this.heroisIniciais)
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      .sort(() => Math.random() - 0.5);

    this.tela.atualizarImagens(copias);

    setTimeout(() => {
      this.esconderHerois(copias);
    }, 1000);
  }

  esconderHerois(herois) {
    console.log("escondendo herois");
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao,
    }));

    this.tela.atualizarImagens(heroisOcultos);

    this.heroisOcultos = heroisOcultos;
  }

  verificarSelecao(id, nome) {
    const item = { id, nome };

    const heroisSelecionados = this.heroisSelecionados.length;

    switch (heroisSelecionados) {
      case 0:
        this.heroisSelecionados.push(item);
        break;

      case 1:
        const [opcao1] = this.heroisSelecionados;

        this.heroisSelecionados = [];

        if (opcao1.nome === item.nome && opcao1.id !== item.id) {
          alert("combinao correta", item.nome);

          return;
        }

        alert("combinao incorreta");

        break;
    }
  }

  jogar() {
    this.embaralhar();
  }
}
