import Employee from "./models/employee.js";
import * as salaryService from "./services/salary-service.js"

// vai no html e lê os dados
const dados = document.getElementById('grossSalaryInput').innerHTML;

console.log(dados);

// transformo em array 
const result = dados.split('\n');

console.log(result);

// pego somente o nome que esta no array
const nome = result[0];

console.log(nome);

// pego o numero que é uma string no array, e transformo para number
const number = Number(result[1]);

console.log(number);

// criamos o objeto employee com nome e number
const employee = new Employee(nome, number);

console.log(employee);

// aplicar a funcao netSalary para achar o salario liquido ja com os descontos
const netService = salaryService.netSalary(employee);

console.log("Funcionário " + employee.name);
console.log("Salário bruto " + employee.grossSalary.toFixed(2));
console.log("Salário líquido " + netService.toFixed(2));


