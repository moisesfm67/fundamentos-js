// enquanto ela nao mudar, nada para!
// let termoDeParada = true

// let contador = 0
// while (termoDeParada) {
//     termoDeParada = contador < 10

//     if (contador % 2 === 0) {
//         console.log('Numero par', contador)
//     }
//     contador += 1

// }

// /// 
// do {
//     console.log('Vai executar uma vez! pois termoDeParada é', termoDeParada)
// } while (termoDeParada);

// while (termoDeParada) {
//     console.log('Nao vai executar!')
// }

// let termoParada = true

// let contador = 0

const listaDeTarefas = [

    { tarefa: 'lavar o chão', id: 1 },

    { tarefa: 'lavar a louça', id: 2 },

    { tarefa: 'arrumar o quarto', id: 3 },

]

let indice = 0

while (indice < listaDeTarefas.length) {

    console.log(listaDeTarefas[indice].tarefa)

    indice++

}