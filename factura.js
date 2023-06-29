
alert("Factura de venta");
let nombre= prompt("escribe tu nombre");


let prod1 = prompt ("Escribe tu primer producto");


let precio1= prompt ("cual es el precio del primer producto");


let prod2= prompt ("Escribe tu segundo producto");


let precio2= prompt ("cual es el precio del segundo producto");


let prod3= prompt ("Escribe tu tercer  producto");


let precio3= prompt ("cual es el precio del tercer producto");


let prod4= prompt ("Escribe tu cuarto producto");


let precio4= prompt ("cual es el precio del cuarto producto");

let subtotal= Number.parseInt(precio1) + Number.parseInt(precio2) + Number.parseInt(precio3) + Number.parseInt(precio4);
let descuento= subtotal*0.10;
let iva = subtotal*0.19;
let total = subtotal + iva - descuento;


console.log("bienvenido esta es tu factura "+ nombre)

console.log(nombre);

console.log("este es el producto 1:",prod1);

console.log("este es el precio 1:",precio1);

console.log(" este es el producto 2:", prod2);

console.log("este es el precio del producto2:",precio2);

console.log("este es el producto3:",prod3);

console.log("este es el precio del producto 3",precio3);

console.log("este el producto 4:",prod4);

console.log("este es el precio del producto 4:",precio4);

console.log("este es el subtotal", subtotal);

console.log("este es el descuento:",descuento);

console.log("este es el iva:",iva);

console.log("este es el total:",total);

console.log("------------------------");

console.log("Hola ",nombre,"el total a pagar es: ", total, " gracias por confiar en nosotros esperamos vuelvas pronto");



