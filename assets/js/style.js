/*Crear una función para solicitar el número y validar antes de mostrar el resultado que
el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango"
*/

let num1 = parseInt(prompt("Ingrese un número a multiplicar:"))

const numero = (num1) => {
    if (num1 > 20 || num1 <=0) {
        alert("Número fuera de rango o menor o igual a cero")
        location.reload()
        return;
    }
        for (i = 1; i <= num1; i++) {
            let resultado = num1 * i;
            console.log(num1 + " " + "x" + " " + i + " " + "=" + " " + resultado);
    }
}
numero(num1)

//Calculo de factorial con cilo for anidado, con numero ingresado por el usuario.

for (i = 1; i <= num1; i++) {
    let factorial = 1
    for (j = 1; j <= i; j++) {
        factorial = factorial * j
    }  
    console.log("El Factorial de" + " " + i + " " + "es:" + " " + factorial)
}
