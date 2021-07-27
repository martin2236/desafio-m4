function getServicios(){
    return fetch("https://cdn.contentful.com/spaces/o1xrr1wfzugd/environments/master/entries?access_token=ddL6FyukkU8wBU0OyQvnhRk4_ZZOSl5Jh4JaqCvc_1A&content_type=trabajos")
    .then(response => response.json())
  .then(data => {
      const datos = data.items.map((item)=>{
             const imagen = buscarImagen(item.fields.imagen.sys.id, data)
             //console.log(imagen.fields.file.url)
        return {
              title:item.fields.titulo,
              descripcion:item.fields.descripcion,
              url:item.fields.url,
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

function crearCards(datos){
const contenedor = document.querySelector(".portfolio__container")
const fragment = document.createDocumentFragment()
const template = document.querySelector(".template").content
//console.log(datos) 
const datosFiltrados = datos
datosFiltrados.forEach(item =>{
    template.querySelector(".card__h3").textContent = item.title
    template.querySelector(".card__p").textContent = item.descripcion
    template.querySelector(".card__url").textContent = item.url
    template.querySelector(".card__url").hrf = item.url
    template.querySelector(".card__img").scr = item.imagen
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})
contenedor.appendChild(fragment)
}

function crearPortfolio(el){
    const contenedor = document.createElement("div")
    contenedor.classList.add("portfolio")
    contenedor.innerHTML = ` <h2 class="portfolio__h2">Mis trabajos</h2>
    <div class="portfolio__container">
     <template class="template">
          <div class="card">
            <img class="card__img" src="" alt="Computadora">
            <h3 class="card__h3"></h3>
            <p class="card__p"></p>
            <a class="card__url" href=""></a>
      </template>
      </div>`
    el.appendChild(contenedor)
 }

function main(){
    getServicios().then((item)=>{
        crearCards(item)
    })
    const header = document.querySelector(".nav__container")
    const footer = document.querySelector(".footer__contenedor")
    const portfolio = document.querySelector (".port-container")

    crearPortfolio(portfolio)
    crearNav(header)
    crearFooter(footer)
}
main()