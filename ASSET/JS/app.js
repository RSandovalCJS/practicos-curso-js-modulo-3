// Solicitar ingreso de diámetro y el valor ingresado se guarda en variable diametro.
let diametro = prompt("Ingresa el diámetro del círculo:");

// Ya que el valor ingresado por el usuario, a traves del prompt, es devuelto como string
// es necesario convertirlo a número para la operación matematica
diametro = Number(diametro);

// Creamos la variable radio y guardamos su valor calculado a partir del valor del diametro
let radio = diametro / 2;

// Creamos la variable area y guardamos su valor calculado a partir de la formula matematica "area: π * r²"
let area = Math.PI * Math.pow(radio, 2);

// Se muestra el resultado (valor en area) por consola, usamos 
console.log("Para un circulo de diametro " + diametro + ", el área del círculo es: " + area.toFixed(1));

// Se muestra el resultado (valor en area) como una ventanita emergente de alerta
alert("Para un circulo de diametro " + diametro + ", el área del círculo es: " + area.toFixed(1));

// Se muestra el resultado (valor en area) en la pagina web
document.getElementById("resultado").innerHTML = 
    "Para un circulo de diametro " + diametro + ", el área del círculo es: " + area.toFixed(1);