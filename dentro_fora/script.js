
    // extraindo os dados do textarea, e transformando pra number
    const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));

    console.log(dados);


    // calculando quantos estao dentro e quantos estao fora
    let contDentro = 0;
    let contFora = 0;
    for(let i = 0; i < dados.length; i++){
        if(dados[i] >= 10 && dados[i] <= 20){
            contDentro = contDentro + 1;
        }
        else{
            contFora = contFora + 1;
        }
    }

    // mostra quantos estao dentro e quantos estao fora
    console.log(`${contDentro} dentro`);
    console.log(`${contFora} fora`);
