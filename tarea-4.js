//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

ingresar.onclick = function(){
    let cantidadSeg1 = parseFloat(document.querySelector("#segundo1").value) || 0;
    let cantidadSeg2 = parseFloat(document.querySelector("#segundo2").value) || 0;
    let cantidadSeg3 = parseFloat(document.querySelector("#segundo3").value) || 0;
    let cantidadSeg4 = parseFloat(document.querySelector("#segundo4").value) || 0;
    let cantidadSeg5 = parseFloat(document.querySelector("#segundo5").value) || 0;
    
    const sumaDeSegundos = cantidadSeg1 + cantidadSeg2 + cantidadSeg3 + cantidadSeg4 + cantidadSeg5 

    console.log(sumaDeSegundos)

    let cantidadMin1 = parseFloat(document.querySelector("#minuto1").value) || 0;
    let cantidadmin2 = parseFloat(document.querySelector("#minuto2").value) || 0;
    let cantidadmin3 = parseFloat(document.querySelector("#minuto3").value) || 0;
    let cantidadmin4 = parseFloat(document.querySelector("#minuto4").value) || 0;
    let cantidadmin5 = parseFloat(document.querySelector("#minuto5").value) || 0;

    const sumaDeMinutos = cantidadMin1 + cantidadmin2 + cantidadmin3 + cantidadmin4 + cantidadmin5

    let cantidadhs1 = parseFloat(document.querySelector("#hora1").value) || 0;
    let cantidadhs2 = parseFloat(document.querySelector("#hora2").value) || 0;
    let cantidadhs3 = parseFloat(document.querySelector("#hora3").value) || 0;
    let cantidadhs4 = parseFloat(document.querySelector("#hora4").value) || 0;
    let cantidadhs5 = parseFloat(document.querySelector("#hora5").value) || 0;

    const sumaDeHs = cantidadhs1 + cantidadhs2 + cantidadhs3 + cantidadhs4 + cantidadhs5

    sumaDeMinutosPorSegundos = Math.floor(sumaDeSegundos / 60)

    segundosRestantes = sumaDeSegundos % 60

    sumaDeHsPorMinutos = Math.floor((sumaDeMinutos + sumaDeMinutosPorSegundos) / 60)
 
    minutosRestantes = (sumaDeMinutos + sumaDeMinutosPorSegundos) % 60

    hsTotales = sumaDeHs + sumaDeHsPorMinutos

    const mostrarDatos = document.querySelector("#mostrar-datos");

    mostrarDatos.value = `${hsTotales}:${minutosRestantes}:${segundosRestantes} `

}

    


  


