const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")

const URLL = `js/cards.json`

const retornoCardMateria = (contenido)=> {

    const {card, titulo, area} = contenido
    return `<div class="col s12 m6 l3">
                <div class="card z-depth-2">
                    <div class="card-image center">
                       <img src="${card}" title="${titulo}">
                    </div>
                    <div class="card-content black">
                       <p class="yellow-text">ÁREA: <span>${area}</span></p>
                    </div>
                </div>
            </div>`
}

const retornoCardError = ()=> {
   return `<div class="center"> 
               <br><br><br><br> 
               <h4>Ocurrió un error, no fue posible cargar las materias.</h4> 
               <br><br> 
           </div>`
}

// Para mostrar uso de Fetch:
const mostrarCard = async (URL)=> {
   let cardsAmostrar = ""
      try{
         const response = await fetch(URL)
         const data = await response.json()
               data.forEach(contenido => {
                  cardsAmostrar += retornoCardMateria(contenido)
               })
               contenidoDOM.innerHTML = cardsAmostrar
      } catch (error){
         contenidoDOM.innerHTML = retornoCardError()
      } finally{
         cargandoDOM.innerHTML = ""
      }
}

// Aquí queda desprolijo, pero si lo ponía en el archivo "eventos", no fucionaba.
//  No descubrí por qué :(
   
const mostrando = document.getElementById("mostrando")
mostrando.addEventListener("click", ()=> {
    mostrarCard(URLL)
})
