const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const resultado = document.getElementById("resultado");
const busqueda_nombre = document.getElementById("busqueda_nombre");


class Alumno {
  constructor(nombre, apellido,) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const db = [
  new Alumno("Sofia", "Barboza"),
  new Alumno("Monse", "Urista"),
  new Alumno("Jezabel", "Hernandez"),
  new Alumno("Benito", "Corral")
];




function crear_alumno() {
let alumno = new Alumno(nombre.value, apellido.value);
  db.push(alumno);
  localStorage.setItem("db", db);
  nombre.value = "";
  apellido.value = "";
}
 
 

function obtener_alumno() {
  const alumno = buscar_por_nombre(busqueda_nombre.value);
  

  resultado.innerHTML = `
    <div>
      Nombre: ${alumno.nombre}<br>
      Appellido: ${alumno.apellido}<br>
    </div>
  `;
}

function buscar_por_nombre(nombre) {
  let resultado = null;
  for (let i = 0; i < db.length; i++) {
    
    if (nombre === db[i].nombre) {
      resultado = db[i];
    }
  }
  return resultado;
}

function buscarApellido(apellido){
    let resultado = null;
    for(let i = 0; i < db.length; i++) {
     
        if (apellido === db[i].apellido) {
          resultado = db[i];
        }
      }
      return resultado;
}

function obtener_apellido(){
const apellido = buscar_por_apellido(busqueda_apellido.value);

resultado.innerHTML =
resultado.innerHTML = `
    <div>
      Nombre: ${alumno.nombre}<br>
      Appellido: ${alumno.apellido}<br>
    </div>
  `;
}


function buscar_por_apellido(apellido) {
    let resultado = null;
    for (let i = 0; i < db.length; i++) {
     
      if (apellido === db[i].apellido) {
        resultado = db[i];
      }
    }
    return resultado;
  }