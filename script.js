


var teste = Array.from(document.querySelectorAll('.livro__link')).map(function( elemento , indice, arrayBase){
    const imagem = (elemento.querySelector('.livro__img').src)
    const titulo = (elemento.querySelector('.livro__titulo').innerHTML)
    const autor = (elemento.querySelector('.livro__autor').innerHTML)
return { imagem: imagem, titulo: titulo, autor: autor}
}
   
)


//animação dos itens surgindo

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
        target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

if(target.length) {
window.addEventListener('scroll', debounce(function(){
    animeScroll()
    console.log('aasas')
}, 100))
}



/*var descendentes = document.querySelectorAll("#livro__link");
for (var i = 0; i < descendentes.length; i++) {
    descendentes[i].addEventListener("click", function (e) {
        alert('O elemento clicado foi o ' + this.innerHTML);
    })
} */
