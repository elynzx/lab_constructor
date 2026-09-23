// ¡Escribe tu código debajo de esta línea!
function FriendList(cantidad, nombres) {
  this.cantidad = cantidad;
  this.nombres = nombres;
}

const [, , , cantidadParam, ...nombresParam] = process.argv;
const nuevaLista = new FriendList(cantidadParam, nombresParam);

console.log(nuevaLista.nombres);
// ¡Escribe tu código encima de esta línea!