// funcao construtora, posso a partir dai instanciar objetos customizados
// export default deixa essa funcao para eu importar ela em outros modulos
export default function Employee(name, grossSalary) {
    this.name = name;
    this.grossSalary = grossSalary;
}

