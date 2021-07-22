
function crearServicios(el){

//crea el contenedor de los servicios
const contenedor = document.createElement("div")
contenedor.classList.add("servicios")
contenedor.innerHTML = ` <h2 class="servicios__h2">Mis servicios</h2>
<div class="servicios__container">
 <template class="template">
      <div class="card">
        <img class="card__img" src="./imagenes/coding.png" alt="Computadora">
        <h3 class="card__h3"></h3>
        <p class="card__p"></p>
 
  </template>
  </div>`
el.appendChild(contenedor)

// importa los datos desde contentful
    function getServicios(){
    const datos = fetch("https://cdn.contentful.com/spaces/o1xrr1wfzugd/environments/master/entries?access_token=ddL6FyukkU8wBU0OyQvnhRk4_ZZOSl5Jh4JaqCvc_1A&content_type=work")
    .then(response => response.json())
  .then(data => crearCards(data));
}
//crea las cards con el contenido importado FALTA SOLUCIONAR LAS IMAGENES
function crearCards(datos){
    const contenedor = document.querySelector(".servicios__container")
const fragment = document.createDocumentFragment()
const template = document.querySelector(".template").content
//console.log(datos.includes.Asset[0].fields.file.url) URL DE IMAGENES
const datosFiltrados = datos.items
const imagenes = datos.includes.Asset[0].fields.file.url

datosFiltrados.forEach(item =>{
    template.querySelector(".card__h3").textContent = item.fields.titulo
    template.querySelector(".card__p").textContent = item.fields.descripcion
    template.querySelector(".card__img").scr = imagenes
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})
contenedor.appendChild(fragment)
}

return getServicios()
}
