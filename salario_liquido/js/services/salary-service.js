import * as taxService from './tax-service.js';
import * as pensionService from './pension-service.js';
import Employee from '../models/employee.js';

export function netSalary(employee) { // meu netSalary recebe o employee ou seja todo o meu objeto funcionario

    const tax = taxService.tax(employee.grossSalary);
    const pension = pensionService.discount(employee.grossSalary);

    return employee.grossSalary - tax - pension;
}