const calculando = document.getElementById("botonCalcular")
calculando.addEventListener("click", ()=> {
    tuPromedio()
})

const guardando = document.getElementById("botonGuardar")
guardando.addEventListener("click", ()=> {
    creaMateria()
})


function Materia(nombre, notas, promedio){
    this.nombre=nombre
    this.notas=notas
    this.promedio=promedio
}


const msjCarga = (mensaje, texto, bgColor)=> {
    Swal.fire({
        icon: 'success',
        title: mensaje,
        text: texto,
        showConfirmButton: true,
        background: bgColor || 'white',
        color: '#ffffff'
    })
}


