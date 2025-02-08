// Las funciones de flecha y las funciones regulares se diferencian principalmente en cómo manejan el contexto de 'this'.
// Las funciones regulares tienen su propio 'this', que depende de cómo y dónde se llaman.
// En cambio, las funciones de flecha no crean su propio 'this', sino que heredan el 'this' del entorno en el que fueron definidas.
// Además, las funciones de flecha son más concisas, no pueden usarse como constructores y no tienen acceso a 'arguments' o 'super'.
// Son especialmente útiles en librerías como React o Vue porque simplifican el manejo del 'this' en callbacks y métodos,
// evitando la necesidad de hacer 'bind' manualmente, lo que hace el código más limpio y fácil de mantener.


//Ingreso de un número
let num1 = prompt('Indique un número: ', '');

// Convertir el valor ingresado a número
num1 = parseInt(num1); // O Number(num1)

//Función regular
function funcionRegular(num1) {
    if (num1 % 2 === 0) {
        console.log(`El número ${num1} es par`);
    } else {
        console.log(`El número ${num1} es impar`);
    }
}

//Función de flecha
const funcionFlecha = (num1) => {
    if (num1 % 2 === 0) {
        console.log(`El número ${num1} es par`);
    } else {
        console.log(`El número ${num1} es impar`);
    }
}

//Llamadas a las funciones para probar
funcionRegular(num1);
funcionFlecha(num1);
