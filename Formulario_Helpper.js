function enviarDados(){
    var nome = document.getElementById("nome");
    var email= document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    var estado = document.getElementById("estado");
    var cidade = document.getElementById("cidade");
    var bairro = document.getElementById("bairro");
    var logradouro = document.getElementById("logradouro");
    var numero = document.getElementById("numero");


    var dados = localStorage.getItem('Usuario');
    dados= JSON.parse(dados);
     
    if(dados == null){
        localStorage.setItem('Usuario', '[]');
        dados = [];        
    }
     var auxRegistro = JSON.stringify({
         nome: nome.value,
         email: email.value,
         cpf: cpf.value,
         telefone: telefone.value,
         cep: cep.value,
         estado: estado.value,
         cidade: cidade.value,
         bairro: bairro.value,
         logradouro: logradouro.value,
         numero: numero.value   
        
     });

     dados.push(auxRegistro);

     localStorage.setItem('Usuario', JSON.stringify(dados));  
     alert("Registro adicionado.");

     }    

function Exibirdados(){
    console.log(localStorage.getItem('Usuario'))

}
function Apagardados(){
    localStorage.removeItem('Usuario')
    alert("Registro excluído.");
}

