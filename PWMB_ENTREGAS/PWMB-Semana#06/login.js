function logando(){
    let nome = document.getElementById("email").value
    let senha = document.getElementById("pass").value
    if(senha != "senha123"){
        alert("É necessário preencher com seu email e senha!")
    }else{
        window.alert(`Olá, ${nome}! Bem vindo`)
        window.location.assign("menu.html");
    }
}