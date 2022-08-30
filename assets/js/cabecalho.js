document.querySelector('.header').innerHTML += cabecalho()

function cabecalho(header){
    cabecalhoHtml = `<section class="cabecalho">
    <div class="cabecalho__container">
        <img src="assets/img/logo.png" alt="logo" class="cabecalho__logo">
        <nav class="cabecalho__nav">
            <a href="#sobre">Sobre</a>
            <a href="#recomendacoes">Recomendações</a>
        </nav>  
    </div>
</section>`
return cabecalhoHtml
}