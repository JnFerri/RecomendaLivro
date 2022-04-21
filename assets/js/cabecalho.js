document.querySelector('.header').innerHTML += cabecalho()

function cabecalho(header){
    cabecalhoHtml = `<section class="cabecalho">
    <div class="cabecalho__container">
        <img src="assets/img/logo.png" alt="logo" class="cabecalho__logo">
        <nav class="cabecalho__nav">
            <a href="index.html">Pagina Inicial</a>
            <a href="Recomendacoes.html">Recomendações</a>
            <a href="assinatura.html">Assinatura</a>
        </nav>  
    </div>
</section>`
return cabecalhoHtml
}