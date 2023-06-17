"use strict";
// FUNCION NORMAL
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
// FUNCION FLECHA
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(5, 3));
// FUNCION FLECHA CUANDO SOLO ES UNA LINEA
let sumaFlechaMin = (a, b) => a + b;
console.log(sumaFlechaMin(5, 5));
