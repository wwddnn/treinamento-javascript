const p1 = { // cria um objeto // preferencia para constatntes pois objetos imutaveis sao uma boa pratica
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

// funcao construtora //usars sempre o this // nao precisa criar os atributos antes como no java
const Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// prototype é usado para criar funcoes dentro da classe, nesse caso dentro da classe Product
// as funcoes criamos com o prototype e nao dentro da classe acima, porque pode ser usado por qualquer objeto as funcoes

Product.prototype.total = function(){ //usar prototype para criar funcoes // usar sempre o this nos atributos
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){ // funcao para adicionar ao estoque // usar sempre o this no atributo nao esquecer
    return this.quantity += amount;
}

Product.prototype.remove = function(amount){ // funcao para remover do estoque // usar sempre o this no atributo nao esquecer
    if(this.quantity >= amount){
        return this.quantity -= amount;
    }
}

// se a funcao tiver dentro do construtor vai ser dado prioridade pra ela quando chamarmos
Product.prototype.label = function(){ // rotulo pra retornar o name e price // javascript tambem tem o metodo toString()
    return "Dados: " + "name: " + this.name + ", " + "price: " + this.price;
}

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);




