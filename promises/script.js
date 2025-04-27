
// essa funcao vai ser usada dentro da promise
function f(g, h) {
    setTimeout(() => { // com o setTimeOut so depois de 3s conforme estabeleci é que vai resolver ou nao resolver essa promise
        if(10 > 0) {
            g("P");
        }
        else {
            h("Q");
        }
    }, 3000);    
}

 // minhaPromise criada aqui com o new
 // promisse pode ter 3 estados: pending, fullfield, reject
 // promise é um modelo de execucao muito usado para OPERACOES ASSINCRONAS
const minhaPromise = new Promise(f);

// minhaPromise estanciada aqui
minhaPromise
    .then(valor => {
        console.log("Resolvida corretamente " + valor);
    })
    .catch(valor => {
        console.log("Não resolvida " + valor);
    });