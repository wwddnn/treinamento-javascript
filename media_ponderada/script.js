
    // é um textarea entao vou pegar o elemento pelo id e depois vou buscar somente o que tem dentro dele
    const dados = document.getElementById("dados").innerHTML;

    console.log(dados);

    // vou colocar em forma de array, uso split com o separador
    const array = dados.split('\n');

    console.log(array);

    // vou transformar de string para number atraves do map
    const num = array.map(x => Number(x));

    console.log(num);

    // multiplicando cada valor pelo seu peso 2,3,5
    const pos0 = num[0] * 2;
    const pos1 = num[1] * 3;
    const pos2 = num[2] * 5;

    // dividindo os valores pelo denominador que é a soma dos pesos, 2+3+5 = 10
    const mediaPond = (pos0 + pos1 + pos2) / 10;

    // mostra o resultado, fixado em 1 casa decimal
    console.log(mediaPond.toFixed(1));

