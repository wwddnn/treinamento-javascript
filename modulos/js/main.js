// posso importar assim é uma forma, usando apelido
// import * as nb from './numbers.js';

// posso importar assim também, usando a desestruturacao de objeto
import {sum, exp, round} from './numbers.js'; // vou importar o modulo numbers para usar essas funcoes 

import Product from './product.js'; // vou importar o modulo product para criar produtos


const obj = new Product("Computador", 800.0, 10); // criamos um objeto com o construtor Product que vem de outro modulo

console.log(obj);


// repara que no codigo acima, o meu main esta inportando 2 modulos, e o meu proprio main é um modulo
