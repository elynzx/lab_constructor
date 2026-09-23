// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;
  this.imprimirCorreo = function () {
    console.log(`${this.asunto}: ${this.mensaje}`);
  };
}

const asuntoParam = process.argv[3];
const mensajeParam = process.argv[4];

const nuevoCorreo = new Mail(asuntoParam, mensajeParam);

// ¡Escribe tu código encima de esta línea!

nuevoCorreo.imprimirCorreo();
