
let titulo = document.querySelector("h1");
let MostrarDatos = document.querySelector("#mostrar-datos")
let ingresar = document.querySelector("#ingresar")

ingresar.onclick = function (){
  let primerNombre = document.querySelector("#primer-nombre").value ;
  let segundoNombre = document.querySelector("#segundo-nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let edad = document.querySelector("#edad-usuario").value;
  let datosCompletos = primerNombre + ", " + segundoNombre + ", " + apellido + ", " + edad + ".";  
  MostrarDatos.value = datosCompletos

    titulo.textContent = "Bienvenido " + primerNombre
  return false;
}
    

    

