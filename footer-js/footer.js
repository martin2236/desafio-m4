function crearFooter(el){
    const contenedorEl = document.createElement("div")
    contenedorEl.innerHTML = `
    <footer class="footer">
    <img class="footer__logo" src="./imagenes/Logo.png" alt="logo">
    <div class="footer__insta">
    <p class="footer__link-cont-p">Instagram <img class="footer__link-cont-red" src="./imagenes/instagram-logo.png" alt="logo"></p>
    <p class="footer__link-cont-p">Linkedin <img class="footer__link-cont-red" src="./imagenes/linkedin.png" alt="logo"></p>
    <p class="footer__link-cont-p">Github <img class="footer__link-cont-red" src="./imagenes/github.png" alt="logo"></p>
</div>
</footer>`
 el.appendChild(contenedorEl)
}