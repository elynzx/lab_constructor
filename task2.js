function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;
}

// ¡Escribe tu código debajo de esta línea!

const asuntoParam = process.argv[3];
const mensajeParam = process.argv[4];

const nuevoCorreo = new Mail(asuntoParam, mensajeParam);

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.asunto + ": " + nuevoCorreo.mensaje);