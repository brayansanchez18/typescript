interface Usuario {
  nombreUsuario:string;
  password:string;
  // para decir si un parametro es opcional usamos '?'
  // confirmarPassword?:string;
}

// CREAMOS UN OBJETO DE TIPO USUARIO (interface)
let usuario1:Usuario = {
  nombreUsuario: "Emanuel",
  password: "123",
  // confirmarPassword: "123",
};

console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar { abordarTransporte():void }

let avion:Abordar = {
  abordarTransporte: function() {
    console.log('abordando');
  }
}

avion.abordarTransporte();