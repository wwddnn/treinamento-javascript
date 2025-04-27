// rest : valores passados com virgula sao convertidos para um array
function sum(...numbers) { // funcao calcula soma dos numeros de um array  // os ... indica que vai ser um vetor // os ... é um operador do rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]; // acessa os elementos do vetor
    }
    return total;
}

const result1 = sum(1, 2, 3, 4); // se nao tivesse os ... la em cima, aqui teria que colocar os colchetes [ ] para acessar os elementos do array

console.log(result1);

const result2 = Math.max(2, 5, 9, 3); //o max é um rest, entao tem que passar os valores separados por virgula

console.log(result2);



// spread: traducao dele é ''espalhar'', transforma um array em valores por virgula
const myNumber = [2, 3, 10, 5]; // um array

const result3 = Math.max(...myNumber); //o max é um rest, so aceita os valores entre virgulas entao tenho que usar o ... // to espalhando em valores separados por virgula

console.log(result3);



// spread: objeto
const item = { // temos um objeto qualquer
    description: "Computer",
    price: 3000.0,
    quantity: 1
}

const cloneItem = { ...item, weight: 10 }; // pronto clonei ele para um novo objeto. criei um novo, usando ... // pode acrescentar novos elementos tambem se quiser

console.log(cloneItem);