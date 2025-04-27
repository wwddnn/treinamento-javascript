
// pega somente o primeiro "li"
const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML); // mostra o html do item1
console.log(item1.outerHTML); // mostra todo o html do item1 

// pega todos com o querySelectorAll(), traz um node ou seja uma coleção, nao é um array
const items = document.querySelectorAll("li");

console.log(items);

console.log(items[0]); // posso acessar o item na posicao zero

// pega o card1
const card1 = document.querySelector(".card"); // querySelector() é um seletor mesmo, como se fosse no css

console.log(card1);

// acrescentar um elemento dentro do div por exemplo
const paragrafo = document.createElement("p"); // passa entre aspas o tipo de elemento html que deseja criar, nesse caso o paragrafo

paragrafo.innerHTML = "Descrição"; // dentro do paragrafo eu coloquei o conteudo descricao

card1.appendChild(paragrafo); // vou acrescentar um filho no final do card1(variavel criada anteriormente)

// adicionar uma nova classe
card1.classList.add("super-border"); // cardList vai listar todas as classes // add() vai adicionar uma classe ao elemento

// pega todos os cards
const cards = document.querySelectorAll(".card"); // nao é array, mas é considerado array like ou seja parecidos com array

console.log(cards); // imprime um node list que é uma coleção

// obs querySelector() sao metodos mais novos no javascript.
// antigamente usava mais getElementById, getElementsByClassName, getElementsByName

// usando getelementsByClassName
const cardsGet = document.getElementsByClassName("card"); // nao é array, mas é considerado array like ou seja parecidos com array

console.log(cardsGet); // nao é array, nao consigo fazer metodo map() nos elementos
console.log(cards[0]);

console.log("/////")

Array.from(cards).map((item) => { // transformando pra array usando Array.from e depois aplico a funcao map() // pode usar spread tambem [...cads].map()
    console.log(item.innerHTML); // imprime cada um dos elementos do agora array
});



// *** DATASET *** - insere atributos e para isso começa com nome DATA- // exemplo data-price
// usado para facilitar a programacao do javascript
console.log("///DATASET///");

const kard = document.querySelector('[data-product-id="32"]'); // esse seletor com dataset trabalha com colchetes, pois ele pega o atributo e nao a classe

console.log(kard);