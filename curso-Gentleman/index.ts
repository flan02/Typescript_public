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

const auto2 = {
    velocidad: 200,
    cantidadDePuertas: 4,
    getVelocidad(): number {
        return this.velocidad
    },
    getCantidadDePuertas(): number {
        return this.cantidadDePuertas
    },
    setVelocidad(velocidad: number): void {
        this.velocidad = velocidad
    }

}

// polimorfismo: Segun la entidad que lo invoca (cualquier transporte), el contexto es el que define el comportamiento de sus metodos. Siempre tratar de generalizar resultados para reutilizar codigo
const transportesArray: Transporte[] = [transporte, auto,] // ! auto2 no es un transporte, si las propiedades fueran publicas si lo seria
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


// TODO : Creamos nuestros propios tipos

type Dni = string; // * Aca defino el tipo de dato Dni
const dni: Dni = '12345678'
const showDni = (dni: Dni) => { // Si cambia el tipo de dato Dni, se cambia solo todos los lugares donde se utiliza (RECOMENDADO)
    console.log(dni)
}

const dni2: string = '12345679' // El tipo string si cambia tengo que cambiarlo a mano en todos los lugares donde se utiliza (mas tedioso)

// TODO : Creamos nuestra interfaz

interface Persona {
    nombre: string,
    edad: number,
}

interface Abogado extends Persona {
    matricula: string
}

const personita: Persona = {
    nombre: 'Juan',
    edad: 25
}

const abogadito: Abogado = {
    nombre: 'Juan',
    edad: 25,
    matricula: '123456'
}

interface Interface1 {
    prop1: string
}

interface Interface2 {
    prop2: number
}

type InterfaceMix = Interface1 | Interface2  // * Se puede crear un tipo de dato que sea la union de dos interfaces
// * (OR logigo) Contendra las props de interface1 o de interface2 o de ambas
const mixUnion: InterfaceMix = {
    prop1: 'prop1',
    prop2: 13
}

type InterfaceMixIntersection = Interface1 & Interface2  // * Se puede crear un tipo de dato que sea la interseccion de dos interfaces
// * (AND logigo) Si o si tiene que contenes las props de interface1 e interface2
const mixIntersection: InterfaceMixIntersection = {
    prop1: 'prop1',
    prop2: 13
}

/* ********************************************************* */

type SumaFunction = (param1: number, param2: number) => number

const expectSuma = (suma: SumaFunction) => {
    return suma(1, 2)
}

const sumaFc: SumaFunction = (param1: number, param2: number): number => { // Le damos el tipo de SumaFunction transfiriendole tipo number a los param que acepta
    return param1 + param2
}

expectSuma(sumaFc)