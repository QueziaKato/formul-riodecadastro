//#################

//Código de validação de formulário de Cadastro

function verificar() {
   let nome = document.getElementById("Nome").value;
   let number = document.getElementById("Data de Nascimento").value;
   let cpf = document.getElementById("CPF").value;
   let email = document.getElementById("Email").value;
   let telefone = document.getElementById("Telefone").value;
   let cep = document.getElementById("CEP").value
   let endereço = document.getElementById("Endereço").value
   let número = document.getElementById("Número").value;
   let complemento = document.getElementById("Complemento").value;
   let bairro = document.getElementById("Bairro").value;
   let estado = document.getElementById("Estado").value;
    let ponto= document.getElementById ("Ponto de referência").value;
   let senha = document.getElementById("Senha").value;
   let confirmação = document.getElementById("Confirmação de Senha").value;
    
if (!email || !senha || !nome || !dtnasc ||!Complemento) {
    alert("Campos de preenchimento obrigatório. Favor preencher");
    
    } else {
    alert("Campos preenchidos com sucesso!");
    
}
    
    
    
    
    
    
    
    }