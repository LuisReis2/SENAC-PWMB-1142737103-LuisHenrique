// Cadastro DOM
let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("senha");
let inputName = document.getElementById("username");
let inputImage = document.getElementById("image");
let inputDate = document.getElementById("data");
let conta = {
    email: "",
    senha: "",
    username: "",
    data: null,
    imagem: ""
}
let contaString = localStorage.getItem('User');
let count = JSON.parse(contaString);
//Recuperando
function recupera(){
if(count == undefined){
    alert("DEU RUIM");
}else{
    console.log(count);
    console.log(count.senha);
    console.log(count.email)
}
}
function limpa(){
    localStorage.clear();
}
function cadastrar(){
    lerValores()
}
function lerValores(){
    if(inputEmail.value == "" || inputName.value == "" || inputSenha.value == "" ||  inputImage.value == "" || inputDate.value == ""){
        alert("É necessário preencher todos as caixas!");
    }else{
        conta.email = inputEmail.value;
        console.log(conta.email);
        conta.senha = inputSenha.value;
        conta.username = inputName.value;
        conta.data = inputDate.value;
        conta.imagem = inputImage.value;
        console.log(conta);
        // Tentando persistir
        localStorage.setItem('User', JSON.stringify(conta));
        window.alert("CADASTRO CONCLUIDO");
        window.location.assign("login.html");
    }

}


var claro = true
function darkMode(){
    claro = !claro
    if(claro == true){
        document.getElementById("mainT").style.backgroundColor = "#FFEFD5"
    }else{
    document.getElementById("mainT").style.backgroundColor = "black"
    }
}

// ===========Login=============


function logando(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("pass").value
   
    if(senha == count.senha || email == count.email){
        window.alert(`Olá, ${count.username}! Bem vindo`)
        window.location.assign("menu.html");
    }else{
        alert("É necessário preencher com seu email e senha!")
    }
}