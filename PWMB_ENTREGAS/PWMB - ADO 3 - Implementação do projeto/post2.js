import { count } from "./cadastro.js";

let corpo = document.getElementById("main")
let tamanho = 0;
let pessoas = [];
let id_p = 0;

let imagens = document.getElementById("mainImage")
imagens.innerHTML = `<a href="perfilP.html"><img class="perfilImg" src=${count.imagem} ></a>`
pessoas = JSON.parse(localStorage.getItem("posts") || "[]");
read()
document.addEventListener('DOMContentLoaded', () => {
    let botaoDeletar = document.querySelector('del');
    if (botaoDeletar) {
        botaoDeletar.addEventListener('click', postar);
    }

});
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
    if(pessoas.length > 1){
        tamanho += 700;
    }else{
        tamanho = 700;
    }
    
    for (var i = 0; i < pessoas.length; i++) {
        postagem.innerHTML += `<div class="post">
    <div class="perfil">
        <a href="perfilP.html"> <img class="perfilImg" src="${count.imagem}"></a>
        <div class="img">
            <a href="perfilP.html"> ${count.username} postou</a>
        </div>
        <div class="imgDelete">
                            <img class="delet" id="del" onclick="deletar(${i})" src="imagens/lixo.png">
                            <img class="delet" id="up" onclick="update(${i})" src="imagens/update.png">

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
localStorage.setItem("posts", JSON.stringify(pessoas));
corpo.style.height = tamanho + 'px';
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

window.postar = postar;
window.deletar = deletar;
window.update = update;
window.count = count;
