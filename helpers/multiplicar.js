const fs = require("fs");
const colors = require('colors');
const crearArchivoPromise = (base = 5) => {
  return new Promise((resolve, reject) => {
    console.log("++++++++++++++++++");
    console.log(`tabla-${base} `);
    console.log("++++++++++++++++++");

    let salida = "";
    for (let index = 1; index <= 10; index++) {
      salida += `${base}x${index}= ${base * index}\n`;
    }
    console.log(salida);
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    //   if(err) throw err;
    //   console.log(`tabla-${base}.txt creado`)
    // })
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
  });
};
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    if (listar) {
      console.log("++++++++++++++++++".green);
      console.log(`tabla-${base} `.green);
      console.log("++++++++++++++++++".green);
    }

    let salida = "";
    let consolashow = "";
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consolashow += `${base} x ${index} = ${base * index}\n`.red;
    }
    if (listar) console.log(consolashow);
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    //   if(err) throw err;
    //   console.log(`tabla-${base}.txt creado`)
    // })
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivoPromise,
  crearArchivo,
};
