
// JSON tradicional usado em qualquer lugar, tem aspas duplas
    const obj1 = {
    "name": "Computador",
    "price": 1000.0,
    "due-date": "2025-01-10"
    }

// JS aceita assim // due-date tem o traço entao colocar aspas duplas
    const obj2 = {
        name: "Computador",
        price: 1000.0,
        "due-date": "2025-10-02"
    }

// exemplo de JSON completo
    const obj3 = { // pra objeto abre chaves
        id: 53,
        date: "2021-10-02",
        items: [ //pra array abre colchetes // dentro desse array eu tenho 2 objetos
            { //pra objeto abre chaves 
                description: "Celular", // esses aqui dentro sao os atributos desse objeto
                price: 1000.0,
                quantity: 1
            },
            {
                description: "Mouse", // esses aqui denrto sao os atributos desse objeto
                price: 90.0,
                quantity: 1
            }
        ],
        client: { // tenho um objeto aqui dentro com seus proprios atributos
            name: "Ana Maria",
            email: "anamaria@gmail.com",
            active: true
        }
    };    

    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
    console.log(obj3.client);
    console.log(obj3.client.name);

// JS converte a string para JSON simples, usar JSON.parse()
    
    const str = `{"name": "Computador", "price": 1000.0, "due-date": "2025-10-02"}`; // é string, esta entre crases
    console.log(typeof str);
    console.log(str); // é string

    const transformado = JSON.parse(str); // agora virou JSON // para rodar o paser() a string tem que estar certinha com virgulas
    console.log(typeof transformado);
    console.log(transformado); // é JSON
    console.log(transformado.client); // consigo acessar os objetos
   
// converte de JSON para string

    const text = JSON.stringify(transformado); //converte de JSON pra string
    console.log(typeof text);
    console.log(text);