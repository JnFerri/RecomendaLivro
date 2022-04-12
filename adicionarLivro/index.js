
var LivrosArray=[]



function adicionarNovoLivro(){
    
   var imagem = document.getElementById("imagemPost").value
    var nomeLivro = document.getElementById("nomeLivro").value
    var nomeAutor = document.getElementById("nomeAutor").value
    var descricao = document.getElementById("descricaoLivro").value 


    LivrosArray.push( { 
       imagem: imagem,
       nome: nomeLivro,
       autor: nomeAutor,
       descricao:descricao
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


console.log(livro)