/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])//=19

array[i+1]=19
console.log('e. ', array)

const valor = array[i+6]
console.log('f ', valor)

*/

//const frase= prompt('Digite uma frase')
//console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)



/*
let nome = prompt("Digite seu nome:")
let email = prompt('Digite seu email:')
console.log('O e-mail '+ email + ' foi cadastrado com sucesso. \nSeja bem vindo(a), '+ nome + '!')
*/


let listaDeTarefas = []
listaDeTarefas[0] = prompt('Qual a primeira tarefa que você precisa realizar no dia?')
listaDeTarefas[1] = prompt('Qual a segunda tarefa que você precisa realizar no dia?')
listaDeTarefas[2] = prompt('Qual a terceira tarefa que você precisa realizar no dia?')
console.log(listaDeTarefas)

let i = prompt('Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2')
listaDeTarefas.splice[i]
console.log('Tarefa retirada: '+listaDeTarefas[i])
console.log('Lista atualizada: '+listaDeTarefas)