
// buscar o elemento
    const elem = document.getElementById("dados");

// acessar dentro do elemento   
    const conteudo = elem.innerHTML;
    console.log(conteudo);

// pegar somente as strings, colocar como array, e tirar os espacos ou linhas que pularam
    const split = conteudo.split("\n");

// transformar de string pra numero
    const num = split.map(x => Number(x));
    console.log(typeof num);

// achar o maior numero do array 
    let maior = num[0]; //primeiro elemento que e o 5.5 salvamos na variavel let maior
    for(let i = 1; i < num.length; i++) { // comeca no 1 porque ja usamos o primeiro elemento acima
        if(num[i] > maior){ //comparamos cada elemento do array com o primeiro elemento 5.5
            maior = num[i];
        }
    }
    console.log(maior);

