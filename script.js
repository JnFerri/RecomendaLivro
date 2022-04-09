var teste = Array.from(document.querySelectorAll('.livro__link')).map(function( elemento , indice, arrayBase){
    const imagem = (elemento.querySelector('.livro__img').src)
    const titulo = (elemento.querySelector('.livro__titulo').innerHTML)
    const autor = (elemento.querySelector('.livro__autor').innerHTML)
return { imagem: imagem, titulo: titulo, autor: autor}
}
   
)
