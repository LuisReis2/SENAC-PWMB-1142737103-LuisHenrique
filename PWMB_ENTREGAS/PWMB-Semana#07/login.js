// =====Área de login e cadastro====

// Cadastro DOM
let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("senha");
let inputName = document.getElementById("username");
let inputImage = document.getElementById("image");
let inputDate = document.getElementById("data");
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

function recupera(){
if(count == undefined){
    alert("DEU RUIM");
}else{                  //APAGAR DEPOIS
    console.log(count);
    console.log(count.senha);
    console.log(count.email)
}
}
function limpa(){
    localStorage.clear(); // Limpa o local storage
}
function cadastrar(){
    lerValoresConta()
}
function lerValoresConta(){
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



// ============Área de postagem================


let pessoas = [];
let id_p = 0;
function postar() {
    let pessoa = {
        id: id_p
    }
    console.log(id_p);
    lerValores(pessoa);
    pessoas.push(pessoa);
    console.log(pessoas);
    id_p = id_p + 1;
    read();
}
function lerValores(pessoa) {
    pessoa.legenda = prompt("Infome a legenda da sua postagem");
    pessoa.imagem1 = prompt("Informe a URL da imagem 1");
    pessoa.imagem2 = prompt("Informe a URL da imagem 2");
}
function read() {
   
    let postagem = document.getElementById("postagens");
    
    /*
        postagem.innerHTML += `<div class="post">
        <div class="perfil">
            <a href="perfil.html"> <img class="perfilImg" src="imagens/isaa.jpg"></a>
            <div class="img">
                <a href="perfil.html"> Isa Tanisue postou</a>
            </div>
        </div>
        <div class="descript">
            <p>${pessoas[id_p].legenda}</p>
        </div>
        <div class="mostrarProjeto">
            <img class="projectImages" src="${pessoas[id_p].imagem1}">
            <img class="projectImages" src="imagens/seta.png">
            <img class="projectImages" src="${pessoas[id_p].imagem2}">
        </div>
        <button class="botaoProjeto"><a href="projetos.html">Ver mais</a></button>
    </div>`*/
    postagem.innerHTML = "";
    for (var i = 0; i < pessoas.length; i++) {
        postagem.innerHTML += `<div class="post">
    <div class="perfil">
        <a href="perfil.html"> <img class="perfilImg" src="${count.imagem}"></a>
        <div class="img">
            <a href="perfil.html"> ${count.username} postou</a>
        </div>
        <div class="imgDelete">
                            <img class="delet" onclick="deletar(${i})" src="imagens/lixo.png">
                            <img class="delet" onclick="update(${i})" src="imagens/update.png">

                        </div>
    </div>
    <div class="descript">
        <p>${pessoas[i].legenda}</p>
    </div>
    <div class="mostrarProjeto">
        <img class="projectImages" src="${pessoas[i].imagem1}">
        <img class="projectImages" src="imagens/seta.png">
        <img class="projectImages" src="${pessoas[i].imagem2}">
    </div>
    <button class="botaoProjeto"><a href="projetos.html">Ver mais</a></button>
</div>`}

}

function deletar(id){
    pessoas.splice(id, 1);
    console.log(pessoas);
    read();
}
function update(id){
    pessoas[id].legenda = prompt("Infome a nova legenda da sua postagem");
    pessoas[id].imagem1 = prompt("Informe a URL da nova imagem 1");
    pessoas[id].imagem2 = prompt("Informe a URL da nova imagem 2");
    read();
}