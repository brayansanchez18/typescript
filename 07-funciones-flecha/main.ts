// FUNCION NORMAL
let suma = function(a:number, b:number) {
  return a+b;
}
console.log(suma(5,3));

// FUNCION FLECHA
let sumaFlecha = (a:number, b:number) => {
  return a + b;
};
console.log(sumaFlecha(5,3));

// FUNCION FLECHA CUANDO SOLO ES UNA LINEA
let sumaFlechaMin = (a:number, b:number) => a+b;
console.log(sumaFlechaMin(5,5));