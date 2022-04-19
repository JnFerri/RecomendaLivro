
var listaObjetos=[]



function adicionarNovoLivro(){
    
   var imagem = document.getElementById("imagemPost").value
    var nomeLivro = document.getElementById("nomeLivro").value
    var nomeAutor = document.getElementById("nomeAutor").value
    var descricao = document.getElementById("descricaoLivro").value 

    
         var livroObj ={imagem: imagem,
            nome: nomeLivro,
            autor: nomeAutor,
            descricao:descricao}

            listaObjetos.push(livroObj)

            postarLivro()

            localForm.innerHTML = ''
            
    }

    for(i = 0; i < listaObjetos.length ; i++){
        var publicacao = `<div class="livro">
        <button  class="livro__link" >
            <img src="${listaObjetos[i].imagem}" alt="imagem livro" class="livro__img">
            <h3 class="livro__titulo">${listaObjetos[i].nome}</h3>
            <p class="livro__autor">Autor: ${listaObjetos[i].autor}</p>
        </button>
    </div>`}

function postarLivro(){
    var localPostagem = document.querySelector('.livros__container')

    for(i = 0; i < listaObjetos.length ; i++){
        var publicacao = `<div class="livro">
        <button class="livro__link" onclick='selecionarModal()' >
            <img src="${listaObjetos[i].imagem}" alt="imagem livro" class="livro__img">
            <h3 class="livro__titulo">${listaObjetos[i].nome}</h3>
            <p class="livro__autor">Autor: ${listaObjetos[i].autor}</p>
            <p class="descricao" style="visibility: hidden">${listaObjetos[i].descricao}</p>
        </button>
    </div>`


}

//var descendentes = document.querySelectorAll('.livro__link')
    localPostagem.innerHTML += publicacao

    
    }
   





var localForm = document.querySelector('.formulario__container')

function abrirForm(){
    localForm.innerHTML = `<form action="livro.js" class="formulario">
    <div class="formulario__elementos">
        <label for="Imagem" class="formulario__label">Imagem :</label>
            <input type="text" id="imagemPost" class="formulario__text imagemPost" placeholder="Endereço da Imagem">
    </div>
    <div  class="formulario__elementos">
        <label for="nomeAutor" class="formulario__label">Nome do Livro:</label>
        <input type="text" id="nomeLivro" class="formulario__text nomeLivro" placeholder="Nome do Livro">
    </div>
    <div class="formulario__elementos">
        <label for="nomeAutor" class="formulario__label">Nome do Autor</label>
        <input type="text" id="nomeAutor" class="formulario__text nomeAutor" placeholder="Nome do Autor">
    </div>
    <div class="formulario__elementos">
        <label for="descricaodoLivro" class="formulario__label">Descrição do livro:</label>
        <textarea name="descricaoLivro" id="descricaoLivro" cols="100" rows="30" class="descricaoLivro" placeholder="Descricao do Livro">
         </textarea>
    </div>
   <input type="button" value="Adicionar Livro" class="formulario__botao formulario__elemento" onclick="adicionarNovoLivro()">
</form>`
}



