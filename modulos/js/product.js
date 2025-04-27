
// objetivo desse modulo é exportar somente o product, e suas funcoes
// export default mostra que esse modulo exporta somente essa funcao/ classe etc, é o padrao para componentes
export default class Product { 
    
    constructor(name, price, quantity){ //cria o construtor // sempre usar o this nos atributos
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total(){ // usar sempre o this no javascript // criando a funcao total()
        return this.price * this.quantity;
    }

    add(amount){
        return this.quantity += amount;
    }

    remove(amount){
        if(this.quantity >= amount){
            return this.quantity -= amount;
        }
    }

    label(){
        return "Dados: " + "NAME: " + this.name + ", PRICE: " + this.price.toFixed(2) + ", QUANTITY: " + this.quantity;
    }
}

