// =====Área de login e cadastro====

// Cadastro DOM
let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("senha");
let inputName = document.getElementById("username");
let inputImage = document.getElementById("image");
let inputDate = document.getElementById("data");
let regEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
let perfilCanto = document.getElementById(".main2")

//Objeto de conta de usuário
let conta = {
    email: "",
    senha: "",
    username: "",
    data: null,
    imagem: ""
}
//Recuperando
let contaString = localStorage.getItem('User');
let count = JSON.parse(contaString);
export { count }
/*function limpa(){
    localStorage.clear(); // Limpa o local storage
}*/

document.addEventListener('DOMContentLoaded', (event) => {
    let cadastro = document.getElementById("cadastro")
    cadastro.addEventListener("click", () => {
        lerValoresConta();
    });
})

function lerValoresConta() {
    if (inputEmail.value == "" || inputName.value == "" || inputSenha.value == "" || inputDate.value == "") {
        alert("É necessário preencher todos as caixas!");
    } else {
        conta.email = inputEmail.value;
        console.log(conta.email);
        conta.senha = inputSenha.value;
        conta.username = inputName.value;
        conta.data = inputDate.value;
        if (inputImage.value == "") {
            conta.imagem ="imagens/perfil.jpg";
        } else {
            conta.imagem = inputImage.value;

        }
        console.log(conta);
        // Tentando persistir
        if (!regEmail.test(inputEmail.value)) {
            window.alert("Email Invalido!!!!!!")
        } else {
            console.log("Mensagem aceita!")
            localStorage.setItem('User', JSON.stringify(conta));
            window.alert("CADASTRO CONCLUIDO");
            window.location.assign("login.html");
        }
    }

}



let perfil = document.getElementById("perfilP");

function mostraPerfil() {
    let dataFormatada = count.data.replace(/-/g, "/")

    perfil.innerHTML = `


    <img class="fotoPerfil" src="${count.imagem}">
    <div class="labels">
        <h1>Username: ${count.username}</h1>
        <h2>Data de nascimento: ${dataFormatada}</h2>
    </div>


    <a href="configuracao.html"><img class="settings" src="imagens/setting.png"></a>


`
}
export { mostraPerfil }

