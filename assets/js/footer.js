document.querySelector('.footer').innerHTML += footer()



function footer(){
    footerHtml = `<div class="footer__container">
                    <img class="footer__img" src="assets/img/logo.png" alt=" logo recomenda livros">
                    
                    <h3 class="footer__contato">Contato: jeanferrimh@gmail.com</h3>
                </div>`
    return footerHtml
}