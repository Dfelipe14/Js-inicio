// // Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// // hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// // indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.

// var mensaje=prompt("como esta el dia de hoy?");
// alert("El dia de hoy esta: "+ mensaje);

// ------------------------------------------------------------------------------

// // Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// // de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// // para calcular el área y el perímetro se utilizan las siguientes fórmulas:


// // = PI * radio2;


// // = 2 * PI * radio;

// var radio=prompt("ingresar el valor del radio de una circunferencia a calcular?");

// var PII=3.141516;

// var area;

// var perimetro;

// alert(`El area es de: `+ PII*radio*radio + `
// El Perimetro es de: `+ 2*PII*radio);
// ------------------------------------------------------------------------------

// // 3. Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// // edad se debe mostrar un mensaje indicándolo.

// var edad=prompt("Que edad tenes?");
// if (edad>18) {
//     alert("Es mayor de edad puede acceder!")
// }else {
//     alert("No Entras")
// }
// --------------------------------------------------------------------------------

// 4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
// var mensaje = prompt("ingresar caracter")


// var opcion;
//  opcion=mensaje;
// switch (opcion) {
//     case "s":
//         mensaje=alert("Correcto")
//         break;
//     case "n":
//         mensaje=alert("Correcto")
//         break;

//     default:
//         mensaje=alert("Incorrecto")
//         break;
// }

// --------------------------------------------------------------------------------

// // 5. Construir un programa que simule un menú de opciones para realizar las cuatro
// // operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// // numéricos enteros. El usuario, además, debe especificar la operación con el primer
// // carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// // o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

// var num1 = parseInt(prompt("Ingresar Num1"));

// var num2 = parseInt(prompt("Ingresar Num2"));

// var suma = num1+num2;
// var resta = num1-num2;
// var multi = num1*num2;
// var division= num1/num2;
// alert(`
// Seleccionar la operacion que desea realizar
// 1 = Suma
// 2 = Resta
// 3 = Multiplicacion
// 4 = Division`)
// var menu;
// switch (prompt(menu)) {

//     case "1":
//         alert("La suma entre estos numeros " +num1+ " y " + num2+ " es de: "+suma)
//         break;

//     case "2":
//         alert("La resta entre estos numeros " +num1+ " y " + num2+ " es de: "+resta)
//         break;

//     case "3":
//         alert("La multiplicacion entre estos numeros " +num1+ " y " + num2+ " es de: "+multi)
//         break;

//     case "4":
//         alert("La division entre estos numeros " +num1+ " y " + num2+ " es de: "+division)
//         break;

//     default:
//         alert("Fin del menu")
//         break;
// }

// --------------------------------------------------------------------------------

// 6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

var num = parseInt(prompt("Ingresar numero"));

if (num === 0) {
    // alert("No es Par ni Impar es 0");
    varia="no es par impar es 0"

}else if (num%2 == 0) {
    // alert("Numero Par");
varia="Numero par"
}else alert("Numero impar");

// document.getElementById("titulo").textContent=varia
window.document.getElementById("titulo").textContent=varia
// --------------------------------------------------------------------------------

// // 7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// // solicite números al usuario hasta que la suma de los números introducidos supere el
// // límite inicial.

// var valorp = parseInt(prompt("Ingresar valor limite"));

// var num;

// var suma;

// suma = 0

// while (suma<valorp) {
//     suma+=parseInt(prompt("Ingresar numeros hasta superar el valor limite"));
//     console.log(suma);
// }

// --------------------------------------------------------------------------------

// // 8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// // programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// // todos ellos.



// var suma;
// var numeroMaximo;
// var numeroMinimo;
// numeroMaximo = 0;
// numeroMinimo = 1;
// suma = 0;

// do {
//     // let numeroMaximo = [];
//     var num = parseInt(prompt("Ingresar numeros , para salir ingrese el N° 0"));

//     suma += num
//     if (num > numeroMaximo) {
//         numeroMaximo = num
//     }
//     if (num < numeroMinimo) {
//         numeroMinimo = num
//     }
// } while (num != 0);

// alert("numero maximo = " + numeroMaximo);

// alert("numero Minimo = " + numeroMinimo);





// --------------------------------------------------------------------------------

// 10. Escribir una función flecha que reciba una palabra y la devuelva al revés.
// var frase = prompt("Ingresar frase");

// // var frase = "hola";

// var invertir = frase => frase.split("").reverse("").join("");

// alert(invertir(frase));
// console.log(invertir(frase));

// alert(frase);

// // var teclado= prompt("ingrese frase");
// // let frase = [teclado];
// // frase.rev

// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------