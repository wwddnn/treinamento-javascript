// funcao sem argumento
function ola(){
    console.log("Dizer ola");
}

console.log("Vem antes");

// setTimeout(ola, 2000); // settimeout() executa a funcao ola() em 2s // executa de forma assincrona



// outro exemplo:
// funcao recebendo argumento
function dizerBomDia(name){
    console.log(`Bom dia ${name}`);
}

// setTimeout() recebendo a funcao dizerBomDia em 2s
setTimeout(() => {
   dizerBomDia("Warley"); 
}, 2000);



//varios setTimeOut() aninhados cada um executando em 2s
setTimeout(() => {
    dizerBomDia("Warley");
    setTimeout(() => {
        dizerBomDia("Aline");
        setTimeout(() => {
           dizerBomDia("Valentina"); 
        }, 2000);
    }, 2000);
}, 2000);
