function servicios(){
    const header = document.querySelector(".nav__container");
    const servicios = document.querySelector(".servicios-contenedor");
    const footer = document.querySelector(".footer__contenedor")

    crearNav(header);
    crearServicios(servicios);
    crearFooter(footer);
}
servicios();