alert ("BIENVENIDO EN ESTE CASO VAS A TOMAR UNA CLASE");

const clase = { 
    materia: prompt ("Escribe la  materia"),
    tema: prompt ("Escribe el tema que deseas"),
    modalidad: prompt ("en que modalidad se brinda la clase"),
    precio: prompt ("Cual es el precio de la clase"),
    fecha: prompt ("fecha de la clase? "),
    horas: prompt("Escribe las horas que duro la clase")
};
console.log(clase);

alert ("EDUCATIO DATABASE ESTUDIANTE");
const estudiante = { 
    nombreE: prompt ("Escribe tu nombre"),
    apellidoE: prompt ("Escribe tu apellido"),
    telefonoE: prompt ("Escribe tu numero telefonico"),
    metdepago: prompt ("Cual es tu metodo de pago"),
    ciudadE: prompt ("Escribe tu ciudad de residencia ")
};
console.log(estudiante);

alert("EDUCATIO DATABASE DOCENTE")
const docente = { 
    nombreD: prompt ("Escribe tu nombre"),
    apellidoD: prompt ("Escribe tu apellido"),
    telefonoD: prompt ("Escribe tu numero telefonico"),
    profesion: prompt ("Cual es tu profesion?"),
    ciudadD: prompt ("Escribe tu ciudad de residencia "),
};
console.log(docente);



    console.log("el estudiante ", estudiante.nombreE);
    console.log("recibio la clase del docente ", docente.nombreD);
    console.log("esta clase fue programada para el dia ", clase.fecha);
    console.log("esta clase la materia fue ", clase.materia);
    console.log("el tema fue ", clase.tema);
    console.log("y tuvo un valor de ", clase.precio);
    console.log("el cual se pago con el metodo de pago ", estudiante.metdepago);
    console.log("tu")
preciofinal=(clase.precio*clase.horas)

console.log("el precio final es de",preciofinal);