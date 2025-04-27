

const cep = '01001000';

// o FETCH retorna uma promise que é uma execucao assincrona
// pra eu fazer algo com o resultado desse FECTH tenho que chamar o .then()
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

// async é pra mostrar que vai constinuar rodando a funcao de forma assincrona
// await na frente da url que chega pois ja sei que meu async é uma funcao assincrona
// codigo linear sem ficar encadeando .then() nem .catch() como na aula anterior em fetch api
// await so funciona se tiver dentro de uma funcao assincrona com async antes
async function getJsonResponse(url) {
    const response = await fetch(url);// chamou a FETCH ... // await executa a chamada de forma assincrona
    const jsonBody = await response.json();// await é asincrono // json() funcao que retorna uma promise
    return jsonBody;
}

// ** 1° forma de resolver **
// chamada da minha funcao async
// posso fazer assim, chamando o .then() depois 
// aqui esta tudo assincrono tambem
getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
.then(result => {
    console.log(result);
})

// ** 2° forma de resolver **
// criar uma funcao assincrona que chama a funcao getJsonResponse()
async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url); // await tem que estar aqui porque getJsonResponse() é async
    console.log(json);
}

showCepData(`01001000`);// chamando a funcao

