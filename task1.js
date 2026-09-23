function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;
}

// ¡Escribe tu código debajo de esta línea!

const nuevoCorreo = new Mail("hola", "mundo");

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.asunto + ": " + nuevoCorreo.mensaje);
