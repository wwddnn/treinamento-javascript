// vou acessar pelo form, o input que tem o name=name
// no forms consigo acessar ele e os iput pelo name de cada um, por isso importante colocar name
const inputName = document.forms.cadastro.name; 

// quando acontecer um evento no meu inputName eu quero programar uma funcao
// addEventListener é ficar ouvindo o evento pra depois executar uma funcao quando ele ocorrer
// evento 'KEYUP' é um evento que ocorre quando eu levanto uma tecla do teclado
// teste é a funcao que eu quero fazer quando o evento ocorrer, ou seja quando o keyup ocorrer
// * padrao para o nome da funcao é usar o handle depois nome da variavel inputName e depois nome do evento keyup
inputName.addEventListener('keyup', handleInputNameKeyup); // 'keyup' em minusculo, atencaoooo 

// programar eventos é escrever funcoes para quando o evento ocorrer
// objetivo é escrever uma funcao para ser disparada quando ocorrer algum evento de algum componente visual
// * padrao para o nome da funcao é usar o handle depois nome da variavel inputName e depois nome do evento keyup
function handleInputNameKeyup(event){ // essa funcao recebe o proprio evento que foi disparado como argumento
    console.log(event.target.value); // value pega o valor do que foi digitado no teclado // target é o componente que disparou o evento 
}

// ***********************************************
// evento 'CHANGE' é quando voce muda o valor de um input. * evento change é muito usado para validar emails
const inputEmail = document.forms.cadastro.email;

// funcao addEventListener pra ouvir o evento e executar uma funcao
inputEmail.addEventListener('change', handleInputEmailChange); 

// sempre que mudar o input do email eu vou exibir o email
function handleInputEmailChange(event) { 
    if(validateEmail(event.target.value)) {
        event.target.classList.remove("input-error");
    } 
    else {
        event.target.classList.add("input-error"); // classList pega a classe input-error que criei no javascript
    }
}

// funcao para validar email com evento change
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}


// ***************************************************************
// evento 'CLICK' é bem comum de usar. é quando clicamos em alguma coisa.
const btnSubmit = document.querySelector('[type="submit"]'); // pegar pelo atributo do elemento tem que usar '[]'

btnSubmit.addEventListener('click', handleBtnSubmitClick); 

function handleBtnSubmitClick(event) {
    event.preventDefault(); // normal e comum usar preventDefault() para nao fazer nada, se faz muito isso em cada campo
    console.log(`Dados: ${inputName.value} e ${inputEmail.value}`);// e de forma manual voce controle o que quer quer faça com o evento
}