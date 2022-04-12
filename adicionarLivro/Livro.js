

export class Livro {
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



function adicionarNovoLivro(){
    
    var imagem = document.getElementById("imagemPost").value
     var nomeLivro = document.getElementById("nomeLivro").value
     var nomeAutor = document.getElementById("nomeAutor").value
     var descricao = document.getElementById("descricaoLivro").value 
 
 
    const informacoes = { 
        imagem: imagem,
        nome: nomeLivro,
        autor: nomeAutor,
        descricao:descricao
                                 }  
 
         console.log(informacoes)
 
 
    const livro = new Livro(informacoes.imagem, informacoes.nome, informacoes.autor, informacoes.descricao)
 
 
                                                                
 console.log(livro)
 
    
 
 }

console.log(Livro)




