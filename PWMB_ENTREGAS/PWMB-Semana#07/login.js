import { count } from "./cadastro.js"

console.log(count)
// ===========Login=============
let enter = document.getElementById("entra")
enter.addEventListener("click", ()=>{
    logando()
})
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



