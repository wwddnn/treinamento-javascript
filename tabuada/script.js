
    // pega o numero que esta no textarea
    const dados = document.getElementById("dados").innerHTML;

    // transforma de string pra number
    const n = Number(dados);

    // comando for para entrar no ciclo de 0 ate 10 e executar e exibir a tabuada
    for(let i=0; i<=10; i++){
        console.log(n + " x " + [i] + " = " + n * i);
    }

