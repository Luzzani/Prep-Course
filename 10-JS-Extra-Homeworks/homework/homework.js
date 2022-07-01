// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const nnewArray = Object.entries(objeto);
  return nnewArray;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let objetoCantidadCaracteres = {};
  for (let i = 0; i < string.length; i++) {
    let caracterActual = string[i];
    if (caracterActual in objetoCantidadCaracteres) {
      objetoCantidadCaracteres[caracterActual]++;
    } else {
      objetoCantidadCaracteres[caracterActual] = 1;
    }
  }
  return objetoCantidadCaracteres;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = "";
  let minusculas = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i];
    } else {
      minusculas = minusculas + s[i];
    }
  }
  return mayusculas + minusculas;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  /* El parametro que recibo en la funcion: */
  //   str = "The Henry Challenge is close!";

  /* Separo el string con el metodo split, que recibe por parametro
    el caracter por el cual quiero separar, en este caso un espacio vacio.*/

  let invertida = str.split(" ").map(function (palabra) {
    //  invertida = str.split(' ')
    //[The, Henry, Challenge, is, close!]

    /*Uso la funcion map, que recibe un callback por parametro y
          lo ejecuta una vez por cada elemento del array que recorre.
          Como en el array cada elemento es una palabra, llamare asi al parametro del map.*/

    return palabra.split("").reverse().join("");

    /* Separo nuevamente cada palabra con el metodo split, 
            pero esta vez le paso al metodo por parametro un string vacio, 
            al hacer esto el metodo split entiende que debe separar al string por cada caracter. */

    /* palabra.split('') */
    //     Primera iteracion del map: palabra = [T, h, e]
    //     Segunda iteracion del map: palabra = [H, e, n, r, y]
    //     Tercera... etc.

    /* Una vez separado con split aplico el metodo reverse,
    que reordena los elementos de un array de forma invertida. */

    /* palabra.split('').reverse() */
    //     Primera iteracion del map: palabra = [e, h, T]
    //     Segunda iteracion del map: palabra = [y, r, n, e, H]
    //     Tercera... etc.

    /* Ahora aplico el metodo join(''), que une los elementos de un array,
    en un string, y recibe como parametro con que caracter quiere unirlos. 
    En este caso paso un string vacio para que los una sin ningun caracter de por medio. */

    /* palabra.split('').reverse().join('') */
    //     Primera iteracion del map: palabra = 'ehT'
    //     Segunda iteracion del map: palabra = 'yrneH'
    //     Tercera... etc.
  });

  /* El metodo map nos devuelve un array, por lo cual debemos usar
   nuevamente el metodo join sobre el array devuelto */

  //Esta vez le pasamos por parametro un espacio vacio, para que nos una el array con un espacio entre cada elemento.

  return invertida.join(" ");

  // invertida =  "ehT yrneH egnellahC si !esolc"

  /* Por ultimo, una forma de hacer todo lo anterior en una linea de codigo*/
  // return str.split(' ').map(function(e){return e.split('').reverse().join('')}).join(' ');
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let toString = numero.toString();
  let resultado = toString.split("").reverse().join("");
  if (toString === resultado) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let string = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") {
      continue;
    }
    string = string + cadena[i];
  }
  return string;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let cambio = true;
  while (cambio) {
    cambio = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        cambio = true;
      }
    }
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let newArr = [];
  for (let i = 0; i < arreglo1.length; i++) {
              if (arreglo2.includes(arreglo1[i])) {
                newArr.push(arreglo1[i])
              }
  }
  return newArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
