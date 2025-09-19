// Crea una arrow function llamada saludoPersonalizado que reciba dos parametros: nombre y edad, y retorne una cadena como la siguiente
// "Hola, me llamo Isay y tengo 37 años."

const nombre = "Gael";
let edad = "18";

let saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años.`;

document.write(saludoPersonalizado(nombre, edad));