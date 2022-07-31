let pPonde = 0
const materias = []

//CREA LISTA DE NOTAS
function listaNotas(){
    let notasIngresadas = [];
    let valor1 = document.getElementById("valor1").value
        notasIngresadas.push(valor1)
    let valor2 = document.getElementById("valor2").value
        notasIngresadas.push(valor2)
    let valor3 = document.getElementById("valor3").value
        notasIngresadas.push(valor3)
    let valor4 = document.getElementById("valor4").value
        notasIngresadas.push(valor4)
    return notasIngresadas
}

//GENERALIZACIÓN DEL PROMEDIO 
function promPonderado(listaNotas){
    //Variable que determina por cuánto ponderar cada elemento diferente al primero.
    let m = 0.5/((listaNotas.length) - 1);
    let sumaNotas = 0

    sumaNotas = listaNotas.reduce((acumulador, elemento) => acumulador + parseFloat(elemento), 0)

    pPonde = 0.5*parseFloat(listaNotas[0])+ m*(sumaNotas - listaNotas[0]);
}


//Toma los datos ingresados, llama lista de notas y calcula prom
function tuPromedio(){
    let notasIngresadas = listaNotas()
    promPonderado(notasIngresadas)
    
   let final = document.getElementById("final")
       final.innerHTML = `<h3>PROMEDIO</h3><p>${pPonde.toFixed(2)}</p>`;
    
    return pPonde.toFixed(2)
}

//Guarda la info ingresada en el array de materias
//Guarda el array materias en el Storage
function creaMateria(){
    let name = document.getElementById("name").value
    let notasIngresadas = listaNotas()
    let promedio = tuPromedio()  

    const nueva = new Materia(name, notasIngresadas, promedio)
    materias.push(nueva)

    localStorage.setItem('materias', JSON.stringify(materias))
    msjCarga('Listo','La materia se cargó correctamente.', 'darkred')
}

//Calcula el promedio general (promedio de todas las materias)
function promedioGeneral(){
    let materiasGuardadas = JSON.parse(localStorage.getItem("materias"))  //array de objetos
    let sumaProm = 0
    let promGeneral = 0

    for(let i=0; i< materiasGuardadas.length;i++) { 
        sumaProm += parseFloat(materiasGuardadas[i].promedio)
    }
    
    promGeneral = (sumaProm)/(materiasGuardadas.length) 
    console.log(promGeneral)

    let final = document.getElementById("final2")
    final.innerHTML = `<h3>PROMEDIO GENERAL:</h3><p>${promGeneral.toFixed(2)}</p>`;
 
}
