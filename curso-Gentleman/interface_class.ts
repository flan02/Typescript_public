/* 
* Una interfaz sino esta bien manejada puede crecer terriblemente

* Cuando se requiere utilizar una class
? Representar entidades sin tener que repetir codigo, es una estructura, una base para crear instancia de objetos. Podemos reutilizar las propiedades y metodos de la class y logica en muchos ejemplares distintos.
*/

class GentlemanProgrammerToy {
    private moustachePhrase: string;
    constructor(moustachePhrase: string) {
        this.moustachePhrase = moustachePhrase;
    }
    moustachePressed() {
        alert(this.moustachePhrase);
    }

}

const toy = new GentlemanProgrammerToy('I\'m a programmer and I have a moustache');
const toy2 = new GentlemanProgrammerToy('This is typescript');

toy.moustachePressed(); // I'm a programmer and I have a moustache
toy2.moustachePressed(); // This is typescript


/*
* Cuando utilizar interfaces ?!
? Es como un contrato laboral, donde se establecen las reglas que tienen que seguirse se deben cumplir. Es un esqueleto, estructura vacia que nos dice como deberian ser las cosas. No tiene logica, no tiene valores, escrupulos ni nada.
? Aunque si podemos declarar que tenga metodos.
? MODELAMOS NUESTRA INFORMACION, NUESTRA DATA.
*/

// TODO Todas las personas del mundo tendran:
interface Person {
    name: string;
    lastName: string;
    pais: string;
    age: number;
    breath: () => void;
    count: () => number;
}

// TODO Debe cumplir con las reglas de la interface Person
const argentino: Person = {
    name: "Dan",
    lastName: "Chanivet",
    pais: "Argentina",
    age: 35,
    breath: () => { console.log("Alive") },
    count: () => { return 1 }
}

const boliviano: Person = {
    name: "Ariel",
    lastName: "Rueda",
    pais: "Bolivia",
    age: 45,
    breath: () => { console.log("Alive") },
    count: () => { return 2; }
}

// * Tanto la clase como la interfaz pueden ser utilizadas como tipo de parametro.

const sayHi = (person: Person) => {
    console.log(`hola como andas ? ${argentino.name}`);
}

sayHi(argentino); // hola como andas ? Dan

// * Una buena practica es utilizar interfaces para modelar la informacion, y las clases para modelar la logica.
// * Otra buena practica para las interfaces es cuando recibimos info de un endpoint del backend. Cuando estamos utilizando una API le pegamos un endpoint y este nos devuelve cierta info, esta bueno crear una estructura, un modelo de la info que nos devuelve el backend.

interface Human {
    name: string;
    lastName: string;
    age: number;
}

interface BasketballPlayerStatistics {
    ppg: number;
    ['fg%']: number;
}

interface BasketballPlayer extends Human {
    preferredHand: string;
    tshirtNumber: number;
    statistics: BasketballPlayerStatistics;
}

const lebron: BasketballPlayer = {
    name: "Lebron",
    lastName: "James",
    age: 36,
    preferredHand: "right",
    tshirtNumber: 23,
    statistics: {
        ppg: 25.0,
        ['fg%']: 0.49
    }
}

const curry: BasketballPlayer = {
    name: "Stephen",
    lastName: "Curry",
    age: 33,
    preferredHand: "right",
    tshirtNumber: 30,
    statistics: {
        ppg: 30.0,
        ['fg%']: 0.45
    }
}

const durant: BasketballPlayer = {
    name: "Kevin",
    lastName: "Durant",
    age: 32,
    preferredHand: "right",
    tshirtNumber: 7,
    statistics: {
        ppg: 28.0,
        ['fg%']: 0.48
    }
}

interface BasketballTeam {
    name: string;
    players: BasketballPlayer[]; // muchos jugadores
}

