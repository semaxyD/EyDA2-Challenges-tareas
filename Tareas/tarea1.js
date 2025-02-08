
// Definición del arreglo
let numeros = [5, 12, 8, 130, 44];
console.log("Arreglo original:", numeros);


//1. Método push() - Agrega un elemento al final del arreglo
numeros.push(200);
console.log("Después de push(200):", numeros);


//2. Método pop() - Elimina el último elemento del arreglo
let eliminado = numeros.pop();
console.log(`Elemento eliminado con pop(): ${eliminado}`);
console.log("Después de pop():", numeros);


//3. Método forEach() - Itera sobre cada elemento del arreglo
console.log("Usando forEach para imprimir cada elemento:");
numeros.forEach((numero, index) => {
    console.log(`Índice ${index}: ${numero}`);
});


//4. Método find() - Encuentra el primer elemento que cumple una condición
let encontrado = numeros.find(numero => numero > 10);
console.log("Primer número mayor que 10 (find):", encontrado);


//5. Método filter() - Filtra todos los elementos que cumplan una condición
let filtrados = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares (filter):", filtrados);


//6. Método map() - Crea un nuevo arreglo con los resultados de aplicar una función
let duplicados = numeros.map(numero => numero * 2);
console.log("Arreglo con números duplicados (map):", duplicados);


//7. Método shift() - Elimina el primer elemento del arreglo
let primeroEliminado = numeros.shift();
console.log(`Primer elemento eliminado con shift(): ${primeroEliminado}`);
console.log("Después de shift():", numeros);


//8. Método unshift() - Agrega uno o más elementos al inicio del arreglo
numeros.unshift(99, 77);
console.log("Después de unshift(99, 77):", numeros);


//9. Método reduce() - Reduce el arreglo a un solo valor (suma de todos los números)
let sumaTotal = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Suma total de los números (reduce):", sumaTotal);


//10. Método sort() - Ordena el arreglo (por defecto alfabéticamente)
numeros.sort((a, b) => a - b); // Orden numérico ascendente
console.log("Arreglo ordenado de forma ascendente (sort):", numeros);
