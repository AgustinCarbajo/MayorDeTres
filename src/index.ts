let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let btnEnviar = document.getElementById("enviar");

rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";
rotulo3.innerHTML = "Ingrese el tercer número";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let numero3: number = Number(dato3.value);

  if (numero1 > numero2 && numero1 > numero3) {
    console.log("El mayor es " + numero1);
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El mayour es " + numero2);
  } else {
    console.log("El mayor es " + numero3);
  }
});
