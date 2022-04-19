

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
}, 100))
}
var modalContainer = document.querySelector('.modal__container')
var modal = document.querySelector('.modal')
var imgModal = document.querySelector('.modal__imagem').src
var descendentes = document.querySelectorAll('.livro__link')

function selecionarModal(){

    var descendentes = document.querySelectorAll('.livro__link')
for (var i = 0; i < descendentes.length; i++) {

    descendentes[i].addEventListener('click', function (){
    var imagem = this.querySelector('.livro__img').src
     var descricao = `<p class='modal__descricao'>${this.querySelector('.modal__descricao').innerHTML } </p> `
        
        modalContainer.innerHTML = `<img  class="modal__imagem" src="${imagem}" alt="imagem livro ">
        ${descricao}`
        
        modal.style.visibility = 'visible'
            
        
        })
    }

    
}


function fecharModal(){
    modal.style.visibility = "hidden"
}

