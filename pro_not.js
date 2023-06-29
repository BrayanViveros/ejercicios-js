alert ("Bienvenido aprendiz hoy conoceras tus notas finales");



let noma1= prompt("Aprendiz escribe tu nombre completo");

let apre1not1 = Number.parseFloat(prompt ("Escribe tu primera nota"));

let apre1not2= Number.parseFloat(prompt ("Escribe tu segunda nota"));

let apre1not3= Number.parseFloat(prompt ("Escribe tu tercera nota"));


let noma2= prompt("Aprendiz escribe tu nombre completo");

let apre2not1 = Number.parseFloat(prompt ("Escribe tu primera nota"));

let apre2not2= Number.parseFloat(prompt ("Escribe tu segunda nota"));

let apre2not3= Number.parseFloat(prompt ("Escribe tu tercera nota"));



let noma3= prompt("Aprendiz escribe tu nombre completo");

let apre3not1 = Number.parseFloat(prompt ("Escribe tu primera nota"));
let apre3not2= Number.parseFloat(prompt ("Escribe tu segunda nota"));
let apre3not3= Number.parseFloat(prompt ("Escribe tu tercera nota"));




let result1=(apre1not1*0.20+apre1not2*0.20+apre1not3*0.60);
let result2=(apre2not1*0.20+apre2not2*0.20+apre2not3*0.60);
let result3=(apre3not1*0.20+apre3not2*0.20+apre3not3*0.60);



console.log("Este es el nombre del aprendiz: ", noma1);
console.log("Esta es la primer nota del aprendiz: ", apre1not1);
console.log("Esta es la segunda nota:",  apre1not2);
console.log("Esta es la tercera nota del aprendiz: ", apre1not3);
console.log("Este es el resultado final: ", noma1, result1);
console.log("---------------------------");


console.log("Este es el nombre del aprendiz: ", noma2);
console.log("Esta es la primer nota del aprendiz: ", apre2not1);
console.log("Esta es la segunda nota:",  apre2not2);
console.log("Esta es la tercera nota del aprendiz: ", apre2not3);
console.log("Este es el resultado final: ", noma2, result2);
console.log("---------------------------");


console.log("Este es el nombre del aprendiz: ", noma3);
console.log("Esta es la primer nota del aprendiz: ", apre3not1);
console.log("Esta es la segunda nota:",  apre3not2);
console.log("Esta es la tercera nota del aprendiz: ", apre3not3);
console.log("Este es el resultado final: ", noma3, result3);
console.log("---------------------------");



