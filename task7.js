// ¡Escribe tu código debajo de esta línea!
function Auto(
  marca,
  modelo,
  anio,
  color,
  puertas,
  kilometraje,
  placa,
  tipoMotor,
) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
  this.puertas = puertas;
  this.kilometraje = kilometraje;
  this.placa = placa;
  this.tipoMotor = tipoMotor;
  this.motor = function () {
    return this.tipoMotor === "combustion" ? "combustion" : "electrico"
  };
  this.generarFicha = function () {
    return `Auto: ${this.marca} ${this.modelo} (${this.anio}), Placa: ${this.placa}, Color: ${this.color}, ${this.puertas} puertas, ${this.kilometraje}km, Motor: ${this.motor()}`;
  };
}

const marcaParam = process.argv[2];
const modeloParam = process.argv[3];
const anioParam = process.argv[4];
const colorParam = process.argv[5];
const puertasParam = process.argv[6];
const kilometrajeParam = process.argv[7];
const placaParam = process.argv[8];
const motorParam = process.argv[9];

const miAuto = new Auto(
  marcaParam,
  modeloParam,
  anioParam,
  colorParam,
  puertasParam,
  kilometrajeParam,
  placaParam,
  motorParam,
);

console.log(miAuto.generarFicha());
// ¡Escribe tu código encima de esta línea!
