/*
Cambia el contenido de la etiqueta h1 con document.querySelector 
y asigna el siguiente texto: "Hora del Desafío".
*/
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio"

/*
Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
siempre que se presione el botón "Console".
*/
function mostrarEnConsola(){
    console.log("El botón fue clicado");
}
/*
Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con 
el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
*/
function funcionPromt(){
    alert("Ingrese el nombre de una ciudad de Brasil");
    let ciudadBrasil = prompt ("Ingrese la ciudad");
    alert("Estuve en " + ciudadBrasil  + " y me acorde de ti");
}
/*
Crea una función que muestre una alerta con el mensaje: "Yo amo JS" 
siempre que se presione el botón "Alerta".
*/
function mostrarAlerta(){
    alert("Yo amo JS");
}

/*
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado 
de la suma en una alerta.
*/
function sumaNum() {
    alert("A continuacion ingrese los numeros a sumar");
    
    // Convertir las cadenas a números utilizando parseFloat
    let num1 = parseFloat(prompt("Primer numero"));
    let num2 = parseFloat(prompt("Segundo numero"));

    // Verificar si la conversión fue exitosa
    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        alert("El resultado de la suma es " + resultado);
    } else {
        alert("Ingresa números válidos");
    }
}

// Llamar a la función
sumaNum();