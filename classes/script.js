
class Product {
    
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

const p1 = new Product("Monitor", 800.0, 10);

const p2 = new Product("Mouse", 50.0, 4);