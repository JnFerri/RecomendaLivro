
var listaObjetos=[]



function adicionarNovoLivro(){
    
   var imagem = document.getElementById("imagemPost").value
    var nomeLivro = document.getElementById("nomeLivro").value
    var nomeAutor = document.getElementById("nomeAutor").value
    var descricao = document.getElementById("descricaoLivro").value 


    listaObjetos.push( { 
       imagem: imagem,
       nome: nomeLivro,
       autor: nomeAutor,
       descricao:descricao,

       publicacao: `<div class="livro">
       <a  href="livro.html"class="livro__link" >
           <img src="${imagem}" alt="imagem ${nome}" class="livro__img">
           <h3 class="livro__titulo">${nome}</h3>
           <p class="livro__autor">Autor: ${autor}</p>
       </a>
   </div>`,
                                }  
    )

   



}

class Livro {
   static numeroLivros = 0
   imagem;
   nome;
   autor;
   descricao;



   constructor(imagem , nome , autor, descricao){
   imagem = this.imagem
   nome = this.nome
   autor = this.autor
   descricao = this.descricao
   Livro.numeroLivros += 1

   

}
}

