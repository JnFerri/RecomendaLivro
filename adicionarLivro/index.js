import {Livro} from "./adicionarLivro/Livro.js"

var botao = document.getElementById('botaoAddNovoLivro')
botao.onclick(adicionarLivro())
function adicionarLivro(){
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


   const livro = [new Livro(informacoes.imagem, informacoes.nome, informacoes.autor, informacoes.descricao)]


                                                               

                                

   

}
