const dados = [
  {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];

//---------------------------------------------------------------------------
// FUNCAO funcionariosTerceirizados
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna uma lista contendo somente os funcionários terceirizados
//---------------------------------------------------------------------------

function funcionariosTerceirizados(list) {
  return dados.filter(x => x.terceirizado);
}

//---------------------------------------------------------------------------
// FUNCAO custoTotal
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna um número representando o custo total dos funcionários
//---------------------------------------------------------------------------

function custoTotal(list) {
  return list.map(x => x.valorHora * x.horasTrabalhadas).reduce((x,y) => x + y, 0);
}

//---------------------------------------------------------------------------
// SCRIPT PRINCIPAL
//---------------------------------------------------------------------------

const terceirizados = funcionariosTerceirizados(dados);

console.log(terceirizados); // vai exibir os terceirizados somente

const custoTerceirizados = custoTotal(terceirizados);

console.log(custoTerceirizados); // custo total dos funcionarios terceirizados

console.log("Custo total dos funcionarios terceirizados: R$ " + custoTerceirizados);

// custo de todos os funcionarios
function custoTodos(list){
  return list.map((x) => x.valorHora * x.horasTrabalhadas);
}

console.log(custoTodos(dados));