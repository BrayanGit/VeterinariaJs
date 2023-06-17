const fs = require('fs');
const citasFile = './citas.json';

function registrar(nombre, edad, animal, color, enfermedad) {
  const cita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };
  
  let citas = [];
  
  try {
    const citasData = fs.readFileSync(citasFile, 'utf8');
    citas = JSON.parse(citasData);
  } catch (error) {
    console.log('Error al leer el archivo de citas:', error);
  }
  
  citas.push(cita);
  
  try {
    const citasJSON = JSON.stringify(citas);
    fs.writeFileSync(citasFile, citasJSON, 'utf8');
    console.log('Cita registrada correctamente');
  } catch (error) {
    console.log('Error al escribir en el archivo de citas:', error);
  }
}

function leer() {
  try {
    const citasData = fs.readFileSync(citasFile, 'utf8');
    const citas = JSON.parse(citasData);
    
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
      console.log(`Cita ${index + 1}:`);
      console.log('Nombre:', cita.nombre);
      console.log('Edad:', cita.edad);
      console.log('animal:', cita.animal);
      console.log('Color:', cita.color);
      console.log('Enfermedad:', cita.enfermedad);
      console.log('-------------------');
    });
  } catch (error) {
    console.log('Error al leer el archivo de citas:', error);
  }
}

module.exports = { registrar, leer };





