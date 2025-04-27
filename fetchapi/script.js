
const cep = '01001000';


// parametrizei passando o cep
// fetch é o get // get é a mesma coisa que escrever no navegador, de fazer a busca
// quando essa promise chegou ele muda o estado para resolvido fullfiled
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

// quando chamo a fecth o retorno dela é uma PROMISE, e é assincrono
// 
// console.log(fetchResult);

// se a promisse for resolvida, usamos o then
// a fecth api disponibiliza uma funcao pra acessar o CORPO de uma resposta
// funcoes mais usadas do FETCH API: (onde esta response é usado tambem value)
// ** response.headers() ele pega o cabeçalho
// ** response.json ele() pega o json 
// ** response.text ele() pega o texto
fetchResult
    .then(response => {
        console.log("Sucesso no FETCH ", response); // vem objeto como resposta
        const json = response.json(); // essa funcao json() é uma promise tambem, entao tenho que fazer um then nela
        json
            .then(result => { // tenho que chamar o then pra pegar o corpo da resposta do json()
            console.log("Sucesso no JSON ", result); // vem o conteudo do json
        })
            .catch(error => {
                console.log("Erro no JSON ", error);
            })
        
})
    .catch(error => {
        console.log("Error no FETCH " + error);
    })
