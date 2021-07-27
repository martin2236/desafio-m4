//TRAE LOS DATOS DESDE EL CMS
function getServicios(){
    return fetch("https://cdn.contentful.com/spaces/o1xrr1wfzugd/environments/master/entries?access_token=ddL6FyukkU8wBU0OyQvnhRk4_ZZOSl5Jh4JaqCvc_1A&content_type=trabajos")
    .then(response => response.json())
  .then(data => {
      const datos = data.items.map((item)=>{
             const imagen = buscarImagen(item.fields.imagen.sys.id, data)
             //console.log(item.fields.url)
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
//BUSCA LAS IMAGENES
function buscarImagen(id, datos){
    const imagen = datos.includes.Asset.find((asset) => {
        return asset.sys.id == id; });
       return imagen 
}
//CREA UN TEMPLATE
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
//AGREGA LOS VALORES AL TEMPLATE
function crearCards(datos){
    //console.log(datos.url) 
const contenedor = document.querySelector(".portfolio__container")
const fragment = document.createDocumentFragment()
const template = document.querySelector(".template").content
template.querySelector(".card__h3").textContent = datos.title
template.querySelector(".card__p").textContent = datos.descripcion
template.querySelector(".card__url").textContent = datos.url
template.querySelector(".card__url").href = datos.url // el link esta pero no redirecciona
template.querySelector(".card__img").src = datos.imagen //la url de la imagen esta pero no aparece en el navegador
const clone = template.cloneNode(true)
fragment.appendChild(clone)
contenedor.appendChild(fragment)
}



function main(){
    getServicios().then((item)=>{
        for(const i of item){
            crearCards(i)
        }
    })
   
    const header = document.querySelector(".nav__container")
    const footer = document.querySelector(".footer__contenedor")
    const portfolio = document.querySelector (".port-container")

    crearPortfolio(portfolio)
    crearNav(header)
    crearFooter(footer)
}
main()