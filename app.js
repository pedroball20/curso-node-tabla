const { crearArchivo, crearArchivoPromise } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear();

/**No hacer asi si no user yarg */
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);
/**No hacer asi si no user yarg */

//multiplicar tabla del 5
// const base = 10;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado!"))
  .catch((err) => console.log(err));
// crearArchivoPromise(base)
//   .then((nombreArchivo) => console.log(nombreArchivo, "creado!"))
//   .catch((err) => console.log(err));
