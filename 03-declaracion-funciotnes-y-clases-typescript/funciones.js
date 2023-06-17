"use strict";
class Persona {
    constructor(nombre) { this.nombre = nombre; }
    getNombre() { return this.nombre; }
    static MetodoEstatico() { return 10; }
}
let persona1 = new Persona("Emanuel");
console.log(persona1.getNombre());
console.log(Persona.MetodoEstatico());
