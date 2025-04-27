
const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

// desestruturacao
const { id, client } = obj; // pega somente 2 membros do objeto, nesse caso pega id e client

console.log(id);

console.log(client);


// desestruturacao como argumento de funcao
// desestruturando o objeto items
// fazendo uma function subTotal e dentro dela colocando os atributos desestruturado. mais a frente chama a funcao e o objeto
function subTotal({ price, quantity }){ // desestruturacao, abre o objeto com abre e fecha chaves e colocar o atributo
    return price * quantity;
}
// ou seria assim sem desestruturacao a funcao acima, mas nao tem desestruturacao aqui agora
// function subTotal(item){
// return item.price * item.quantity;  
// }

console.log(subTotal(obj.items[1])); // vai pegar items na pos 1 do obj e depois aplica a funcao subtotal nele


// calculando o total de todos os items
function total({ items }){
    let soma = 0;
    for(let i=0; i<items.length; i++){
        soma = soma + subTotal(items[i]);
    }
    return soma;
}

console.log(total(obj));

// desestruturacao em vetores, array
const [item1, item2] = obj.items;

console.log(item1);
console.log(item2);





