class Persona {
  private nombre:string;
  constructor (nombre: string) { this.nombre = nombre; }
  public getNombre() : string { return this.nombre; }
  static MetodoEstatico():number { return 10; }
}

let persona1 = new Persona("Emanuel");
console.log(persona1.getNombre());
console.log(Persona.MetodoEstatico());