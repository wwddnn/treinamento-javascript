
    // lendo e armazenando os dados do documento, e transformando em array de numeros
    const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));

    console.log(dados);

    // resolucao
    let sum = 0;
    let qt = 0;
    for(let i=0; i<dados.length; i++){
        if(dados[i] > 0) {
            sum = sum + dados[i];
            qt = qt + 1;
        }
    }

    // se nao tiver numero positivo
    if(qt === 0 ) {
        console.log("impossivel calcular");
    }
    else { // se tiver numero positivo
        console.log("result = " + (sum / qt).toFixed(2));
    }