// COMO PEGAR UM ELEMENTO DO HTML POR ID
    const elem = document.getElementById("dados");
    console.log(elem);

// COMO PEGAR O CONTEÚDO DENTRO DE UM ELEMENTO HTML

    const conteudo = elem.innerHTML;
    console.log(conteudo);

// COMO RECORTAR UM STRING COM BASE EM UM SEPARADOR

    const nome = "Maria Silva Costa";
    const result1 = nome.split(" "); //split() cria um array de strings que é vetor, separador aqui é o espaco
    console.log(result1);

    const result2 = conteudo.split("\n"); // separador aqui é a quebra de linha "\n" //cria um array de strings
    console.log(result2);

// COMO CONVERTER UM ARRAY DE STRINGS EM UM ARRAY DE NÚMEROS

    const str = "4.5"; //é string
    console.log(typeof str);
    const n = Number(str); //passa de string para numero
    console.log(n);

    const numeros = result2.map(x => Number(x));
    console.log(numeros);


// COMO MOSTRAR UM NÚMERO COM ARREDONDAMENTO

    const x = 4.5678;
    const result3 = x.toFixed(2);
    console.log(result3);

    console.log(numeros[0].toFixed(2));