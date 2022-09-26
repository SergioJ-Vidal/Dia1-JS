//alert("Javascript funcionando correctamente")

// Con este alert sale el mensaje especificado entre las comillas.

let variableSinValor

let booleano1 = true

let booleano2 = false

console.log (booleano1);

const PI = 3.14
const TAU = 2 * PI

console.log (TAU);

const miNombre = "Sergio"
const miNumeroFav = 22

var booleanos

console.log (miNombre.length);
    
console.log (typeof miNumeroFav);

console.log ("Ni nombre es " + miNombre + " y mi número favorito es el "+ miNumeroFav)

let mensaje = "Seré un crack en JavaScript al terminar el bootcamp"

console.log (mensaje.toUpperCase())

let crack = "Hola soy un crack"

console.log (crack.substring (0,5))

/* Revisar

toString(miNumeroFav)

console.log (typeof miNumeroFav)

let template = "Casa"

let template1 = `He's often called "Johnny" + template1`

//console.log (template1)*/

console.log(PI.toPrecision(3));


//------------------------------Ejercicios Arrays--------------------//

let arrayVacio = []

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9]

let arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let arrayNumerosPares = [0,2,4,6,8]

let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

let holaMundo = ["Hola", "Mundo"]

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]

let arrayDeArrays = [[756, "nombre"],[225, "apellido"],[298, "direccion"]]

console.log (loGuardoTodo.length);

console.log(loGuardoTodo[1])

loGuardoTodo.push("Noche");

loGuardoTodo.unshift("Euralio");

console.log (loGuardoTodo)


//------------------Ejercicio Objetos--------------------//

const coche = {
    marca: "BMW",
    modelo: "5M",
    matricula: "852125-V"
}

const casa = {
    codPostal: 46702,
    calle: "Avenida de Gracia",
    portal: 102,
    piso: "3º Piso",
}

const fullStackDeveloper = {
    arrayLenguajes: ["php", "javascript", "python"],
    arrayProyectos: ["página personal", "ecommerce", "foro"]
}

const perro = {
    nombre: "Pachuco",
    raza: "Dobberman",
    color: "Negro",
    edad: 9,
}

const noticia =  {
    titular: "Pedro Sanchez dimite",
    cuerpo: "La gente ha salido a celebrarlo a las calles"
}

const persona = {
    nombre: "María",
    apellidos: "Fernandez Melero",
    edad: 24,
}

console.log(persona.nombre);

console.log(fullStackDeveloper.arrayLenguajes[1])

const portatil = {
    marca: "Hp",
}

console.log(portatil.marca)

const concierto = {
    grupos: ["PnB", "Bitter", "Sestao"]
}

console.log(concierto.grupos)

const led = {
    arrayRGB: {
        rojo: 250,
        azul: 300,
        verde: 350,}
}

console.log(led.arrayRGB)

let o_error = {
    codigo: "xxx",
}

console.log(o_error.codigo)

let grupo = {
    integrantes: ["Pedro", "Marcos", "Rodri"]
}

console.log(grupo.integrantes[2])

/*Revisar

let impresora = {
   tinta: {

       rojo: rojo,

       verde: verde,
        
      azul: azul,
        
        },
}

let nivelesTinta = {
    tinta
}

console.log(nivelesTinta)

*/

//-----------------------

/* No logro entender como hacerlo

let movil = {
    especificaciones: ,
}


console.log(Object.values(movil);
*/

portatil.marca = "MSI"

console.log(portatil.marca)

//El ejemplo de concierto he declarado de nuevo la variable no creo que sea lo que pedía el ejercicio pero no sabía como hacerlo//

concierto.grupos = ["PnB", "Bitter", "Sestao", "Skorbuto"]

console.log(concierto.grupos)

/*He estado probando los últimos puntos del ejercicio pero no sé hacerlos y estaba poniendo código sin sentido*/