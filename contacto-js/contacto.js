function crearFormulario(el){
const contenedorEl = document.createElement("div")
contenedorEl.classList.add("form-container")
contenedorEl.innerHTML = ` <h2 class="form__container-h2">Escribime</h2>
<form class="form" method="post" name="contacto" >
        <label for="">
            <h3 class="form__h3">NOMBRE</h3>
        </label>
        <input class="form__input" type="text"  name="nombre" required>
        <label for="">
            <h3 class="form__h3">EMAIL</h3>
        </label>
        <input class="form__input" type="email" name="email" required>
        <label for="">
            <h3 class="form__h3">MENSAJE</h3>
        </label>
        <textarea class="form__mensaje" name="mensaje" id="" cols="30" rows="10" required></textarea>
        <button class="form__button">Enviar</button>
    </form>
`
el.appendChild(contenedorEl)
const formularioEl = document.querySelector(".form")

formularioEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const objeto = Object.fromEntries(formData.entries());
    let mensaje = e.target.mensaje.value
    let nombre = e.target.nombre.value
    // una validación MUY basica de prueba =P
    if(mensaje.length > 5){ 
        // esta parte envia el mensaje
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "martoxxx100@gmail.com",
        message: `hola recibiste este mensaje de parte de <strong>${nombre}</strong>:<br>${mensaje}`
      }),
    })
    .then(() => {
        alert("El email se a enviado correctamente");
        document.forms["contacto"].reset()
       
      })
      }else(alert("el mensaje que desea enviar es demasiado corto"))
    

   
  });
    
}

