const userName = 'flan02'

//TODO : Tipos Basicos en Typescript.
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