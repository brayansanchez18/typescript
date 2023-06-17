"use strict";
// CREAMOS UN OBJETO DE TIPO USUARIO (interface)
let usuario1 = {
    nombreUsuario: "Emanuel",
    password: "123",
    // confirmarPassword: "123",
};
console.log(usuario1);
console.log(usuario1.nombreUsuario);
let avion = {
    abordarTransporte: function () {
        console.log('abordando');
    }
};
avion.abordarTransporte();
