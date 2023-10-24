const $listaNumeros = document.querySelectorAll("li")
const arrayDeNumeros = []
for (let i= 0; i < $listaNumeros.length; i++){
   const numeroTexto = $listaNumeros[i].textContent;
   const numeroEntero = parseInt(numeroTexto);
   arrayDeNumeros.push(numeroEntero)
}
console.log(arrayDeNumeros)

let suma = 0;
for(let i =0; i<arrayDeNumeros.length; i++){
    suma = suma + arrayDeNumeros[i] 
}
console.log(suma)
let promedio = suma / arrayDeNumeros.length
console.log(promedio)

let numeroMenor= arrayDeNumeros[0]
for(let i =0;i<arrayDeNumeros.length;i++){
    if (arrayDeNumeros[i] < numeroMenor){
        numeroMenor = arrayDeNumeros[i]
    }
}
console.log(numeroMenor)

let numeroMayor =0;
for(let i= 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] > numeroMayor){
        numeroMayor = arrayDeNumeros[i]
    }
}
console.log(numeroMayor)

let array = [14, 14, 15, 14, 11, 15];
let numeroQueMasSeRepite = 0;
let vecesQueSeRepite = 0;

for (let i = 0; i < array.length; i++) {
  let contador = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[i] === array[j]) {
      contador++;
    }
  }

  if (contador > vecesQueSeRepite) {
    numeroQueMasSeRepite = array[i];
    vecesQueSeRepite = contador;
  }
}

const mostrarPromedio = document.querySelector("#promedio")
mostrarPromedio.textContent = promedio

const mostrarNumeroMenor = document.querySelector("#numeroMenor")
mostrarNumeroMenor.textContent = numeroMenor

const mostrarNumeroMayor = document.querySelector("#numeroMayor")
mostrarNumeroMayor.textContent = numeroMayor

const mostrarNumeroMasFrecuente = document.querySelector("#numeroMasFrecuente")
mostrarNumeroMasFrecuente.textContent = numeroQueMasSeRepite

const mostrarVecesQueSeRepite = document.querySelector("#vecesQueSeRepite")
mostrarVecesQueSeRepite.textContent = vecesQueSeRepite + " veces"
