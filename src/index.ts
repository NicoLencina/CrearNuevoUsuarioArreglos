let nuevocliente: number = 3;
let nuevaDimension: number = 0;

let dimension: number = nuevaDimension;
let clientes: number[] = new Array(dimension);
let facturacion: number[] = new Array(dimension);

function generarNuevoArray() {
  let newClientes: number[] = new Array(nuevaDimension);
  let newFacturacion: number[] = new Array(nuevaDimension);
  for (let index = 0; index < newClientes.length; index++) {
    newClientes[index] = clientes[index];
    newFacturacion[index] = facturacion[index];
  }
  clientes = newClientes;
  facturacion = newFacturacion;
}

function cargarArrayEnPosVacia() {
  for (let index = 0; index < clientes.length; index++) {
    if (clientes[index] == 0) {
      clientes[index] = Math.floor(Math.random() * 2);
      facturacion[index] = Math.floor(Math.random() * 240);
    }
  }
}

function verificacionDeNewCliente(x: number) {
  if (x === 1) {
    nuevocliente = nuevocliente + 1;
    generarNuevoArray();
    cargarArrayEnPosVacia();
    console.log(clientes);
    console.log(facturacion);
  }
  if (x === 0) {
    console.log(clientes);
    console.log(facturacion);
  }
}

nuevocliente = Number(prompt("Quiero ingresar un nuevo cliente?"));
verificacionDeNewCliente(nuevocliente);
