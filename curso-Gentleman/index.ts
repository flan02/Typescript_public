/* 
! Typescript funciona por shapes (formas) y no por tipos de datos ni nombre de interfaces
! compara la forma del tipo con la forma del objeto que se crea, sus prop deben ser iguales
*/

let a: string = 'Teste TS (WEB)';
const b: number = 10;
const c: boolean = true;
const d: boolean[] = [true, false, true];
let e: any
e = 1
e = 'teste'

/* 
TODO Las clases y las interfaces se pueden utilizar como TIPOS
*/
class Transporte {
    private velocidad: number
    constructor(velocidad: number) {
        this.velocidad = velocidad
    }
    getVelocidad(): number {
        return this.velocidad
    }

    setVelocidad(velocidad: number): void {
        this.velocidad = velocidad
    }

}

// * Herencia una auto sera un transporte pero un transporte no sera un auto. ATENCION!
class Auto extends Transporte {
    private cantidadDePuertas: number
    constructor(velocidad: number, cantidadDePuertas: number) {
        super(velocidad)
        this.cantidadDePuertas = cantidadDePuertas
    }
    getVelocidad(): number {
        return super.getVelocidad() + 10 // se puede acceder a la propiedad privada del padre
    }
    getCantidadDePuertas(): number {
        return this.cantidadDePuertas // solo se puede acceder a la propiedad privada desde la clase que la define
    }
}


const transporte: Transporte = new Transporte(200)
// ! transporte.velocidad = 10  (No se puede acceder a la propiedad privada)
console.log(transporte.getVelocidad())
transporte.setVelocidad(200)

const auto = new Auto(250, 4)

// polimorfismo: Segun la entidad que lo invoca (cualquier transporte), el contexto es el que define el comportamiento de sus metodos. Siempre tratar de generalizar resultados para reutilizar codigo
const transportesArray: Transporte[] = [transporte, auto]
transportesArray.forEach(t => console.log(t.getVelocidad()));



/* 
TODO : Interfaces
* Definir un tipo de dato
*/

interface Person {
    name: string,
    age: number,
    getSpeed: (param: number) => number
}

const person: Person = {
    name: 'Juan',
    age: 25,
    getSpeed(param) {
        return param * 10
    }
}

const person2 = person // Typescript ignora los tipos solo compara las formas de los objetos qe estamos creando

// * EndPoint extraido de la API Rick n Morty lo utilizaremos como ej p/ crear Interfaces

const character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    }
}

/*
? Forma Standard

interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    }
}
*/

// ? Forma moderna
interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: CharacterOrigin
}

// * Es una buena practica crear una interface para cada tipo de objeto que se reciba de una API
interface CharacterOrigin {
    name: string,
    url: string
}

const manyCharacters: Character[] = [
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1"
        }
    },
    {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/2"
        }
    }
]

manyCharacters.forEach(c => console.log(c.origin.url))

const result = manyCharacters; //
result.forEach(r => console.log(r.name))

/* 
TODO 
*/