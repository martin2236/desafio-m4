function crearNav(el){
    const contenedor = document.createElement("nav")
    contenedor.classList.add("nav")
    contenedor.innerHTML = `   
    <img class="nav__logo" src="./imagenes/Logo.png" alt="Logo" class="header__nav-logo">
    <div class="nav__menu">
        <img class="nav__menu-img" src="./imagenes/lista.png" alt="Menu">
        <a class="nav__menu-link" href="portfolio.html">Portfolio</a>
        <a class="nav__menu-link" href="servicios.html">Servicios</a>
        <a class="nav__menu-link" href="contacto.html">Contacto</a>
        <div class="menu-oculto"> 
            <div class="menu-oculto__display">
                <img class="menu-oculto__display-close" src="./imagenes/cancel.png" alt="">
                <a class="menu-oculto__display-a" href="">Portfolio</a>
                <a class="menu-oculto__display-a" href="">Servicios</a>
                <a class="menu-oculto__display-a" href="">Contacto</a>
            </div>
        </div>
   </div>
 </nav>`

 el.appendChild(contenedor)
  const menuDisplay = document.querySelector(".nav__menu-img")
 const menu = document.querySelector(".menu-oculto")
 const cerrarMenu = document.querySelector(".menu-oculto__display-close")
 menuDisplay.addEventListener("click", (e)=>{
     e.stopPropagation()
     menu.style.display = "inherit"
 })
 cerrarMenu.addEventListener("click", (e)=>{
    e.stopPropagation()
    menu.style.display = ""
})
}