const userName = 'flan02'

//TODO **************************** Tipos Basicos en Typescript.

// A cada variable le asignamos un tipo de dato especifico
let myTypeString: string = 'Hello World'
let myTypeNumber: number = 35
let myTypeBoolean: boolean = true

myTypeString = 33  //! No corresponde el dato con la variable
//Esto es una ventaja a la hora de desarrollar, evitamos sorpresas

let arrNumber: number[] = [1, 2, 3]
let arrNumber2: Array<number> = [1, 2, 3]

let arrString: string[] = ["a", "b", "c", true] //! Solo caracteres

let arrAny: any[] = [1, "a", true] //? Le resta autoridad a Typescript.

// Tuple (array qe reconoce cant elem y qe tipo tiene c/ pos del array)
let tuplePlayers: [string, number, boolean] = ["a", 2, false]

// Tuple Array
let players: [number, string][];
players = [
    [23, 'Lebron'],
    [2, 'Irving'],
    [23, 'Ivey'],
    [7, 'Brown'],
    [7, 'Doncic']
]

//TODO ************************************** Inferencia de Tipos.
// Typescript se encarga de asignar el tipo de dato a una variable dependiendo el valor inicial
// qe le demos a la variable.

let myVar; // tipo any
let myVar1: string
let myVar2 = 'Hello Ollie!' //? Por inferencia typescript asocia el tipo de variable a String
let myVar3 = true //? Por inferencia la var sera Boolean.


//TODO ************************************** Composicion de Tipos. (Unions, Generics)

//TODO Unions Types la variable puede ser de dos o mas tipos

let myVar5: string | number | null  //por si no tenemos muy claros los datos de una API.
myVar5 = 35 // true (es boolean no esta definido y presentara error).






