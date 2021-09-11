//Bryan Alexander Martinez Guzman 0909-20-6903
//Resumen + ejemplos de codigo de Javascript.

//Para mostrar por pantalla mi texto, HOLA MUNDO(hello world)
document.write("<H1>Hello World</H1>");

//Tipos de datos
"Hola mundo" //Tipo de dato string, podrian ser comillas dobles o simples

//Number, numeros enteros o 
10000
2.3 

//Boolean, tipo booleano siendo falso o verdadero
true 
false

//array, tambien llamados arreglos en español, listas de tipo de datos
//Lo colocare como comentarios para que no haya problema al ejecutarse

//["Bryan", "Alexander", "Hola"]
//[1,2,3]
//[false, true]

//object, objetos donde tenemos datos pertenecientes de un objeto, estan dentro de el.

console.log({"username" : "bryan",
"score": 60.3});

//Variables

//Palabras claves var, let

var nameUser = "john";
let lastname = "carter";

//aca utilizamos la variable, para poder cambiar su valor, estariamos reasignando.
nameUser = "pepe";

//Const, constante, este al ser constante no puede alterarse, asi que no es una variable.
const PI = 3.1415;

console.log(nameUser)



//Operadores

//Podemos utilizar sumas, restas, unir datos...

let numberOne = 60;
let numberTwo = 100;

let resultUno = numberOne + numberTwo;

console.log(resultUno);

//Concatenacion, uniendo ambas.
let name = "Bryan";
let lastame = "Martinez";

let completeName = name + " " +lastame ;
console.log (completeName);

//Comparaciones con variables

let numeroUno = 100;
let numeroDos = 500;

let result = numeroUno > numeroDos;
console.log(result);

//ejemplo de password

let passwordDB = "pepe123"
let input = "pepe123"

let resultPassword = input == passwordDB;
console.log(resultPassword);

//CONDICIONALES

//Control de flujo utilizando if

let contraseña = "AlexanderGuz123"
let identificar = "AlexanderGuz"

let resultContraseña = identificar == contraseña;

//If lo utilizaremos para determinar tal condicion, dependiendo 
//Dependiento el resultado que se tenga

//Condicion si es verdadero, contraseña correcta

if (resultContraseña === true){
    console.log ("Contraseña correcta");
}

//con else, caso contrario de la condicion que colocamos
else {
    console.log("Contraseña incorrecta");
}

//OTRO EJEMPLO SOBRE IF, ELSE 

let score = 70;

//Si score mayor a 70 mostrar esto
if (score> 30){
    console.log ("Practica mas");
}

//Caso contrario mostraras esto
else if (score > 15){
    console.log ("Vas mejorando");
}

//Si caso contrario de los dos anteriores, mostrara esto
else {
    console.log("Necesitar ver tutoriales para mejorar")
}



//AHORA SE MOSTRARA SOBRE SWITCH

let typeCard = "Tarjeta debito";

switch(typeCard){
    case "Tarjeta debito":
        console.log("Es una tarjeta de debito");
        break;

    case "Tarjeta credito":
        console.log("Esto es tarjeta de credito");
        break;
    default:
        console.log("Ninguna tarjeta");
}


//BUCLES

//Un bucle llamado while

//se va a repetir 50 veces
let count = 50;
while (count>0){
    console.log ("Hola mundo");
    count = count -1;
}

//For 
let names = ["Bryan","Alexander", "Jose"];

for(let i= names.length - 1; i >= 0; i-- ){
    console.log(names[i]);
}

//Funciones

function greeting(person){
    console.log("Hola" + person);
}

greeting("Pancho");
greeting("Bolaños");
greeting("Jonas");

//Otro ejemplo de funciones

function add(n1, n2){
    console.log(n1 + n2);
}
add(3,2);
add(100, 300);

add(3, 2);
add(100, 200);
add(1000, 314134);
