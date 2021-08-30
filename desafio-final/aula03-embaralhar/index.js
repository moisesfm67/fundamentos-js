function onLoad() {
  const dependencias = {
    tela: Tela,
  };

  const jogoDaMemoria = new JogoDaMemoria(dependencias);

  console.log('aa')
  
  jogoDaMemoria.inicializar();
}

window.onload = onLoad;
