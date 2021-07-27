    function getServicios(){
    return fetch("https://cdn.contentful.com/spaces/o1xrr1wfzugd/environments/master/entries?access_token=ddL6FyukkU8wBU0OyQvnhRk4_ZZOSl5Jh4JaqCvc_1A&content_type=work")
    .then(response => response.json())
  .then(data => {
    const datos = data.items.map((item)=>{
      const imagen = buscarImagen(item.fields.imagen.sys.id, data)
     // console.log(imagen)
     return {
       titulo:item.fields.titulo,
       descripcion:item.fields.descripcion,
       imagen:imagen.fields.file.url
     }
    })
    return datos
  });
}
function buscarImagen(id, datos){
  const imagen = datos.includes.Asset.find((asset) => {
      return asset.sys.id == id; });
     return imagen 
}
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
getServicios().then((item)=>{
  console.log(item)
 for(i of item){
   crearCards(i)
 }
})
//crea las cards con el contenido importado FALTA SOLUCIONAR LAS IMAGENES
function crearCards(datos){
  console.log(datos)
const contenedor = document.querySelector(".servicios__container")
const fragment = document.createDocumentFragment()
const template = document.querySelector(".template").content
template.querySelector(".card__h3").textContent = datos.titulo
template.querySelector(".card__p").textContent = datos.descripcion
template.querySelector(".card__img").src = datos.imagen
const clone = template.cloneNode(true)
fragment.appendChild(clone)

contenedor.appendChild(fragment)
}

return getServicios()
}
