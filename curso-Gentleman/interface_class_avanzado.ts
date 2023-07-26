
class Vehiculo {
    private numPuertas: number;
    private velocidad: number;
    private marca: string

    constructor(numPuertas: number, velocidad: number, marca: string) {
        // * 1 encapsulamiento de propiedades
        this.numPuertas = numPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }

    getNumPuertas(): number {
        return this.numPuertas;

    }

    setNumPuertas(numPuertas: number): void {
        this.numPuertas = numPuertas;
    }
}

//* 2 Herencia de clases
class Auto extends Vehiculo {
    private color: string;
    constructor(numPuertas: number, velocidad: number, marca: string, color: string) {
        super(numPuertas, velocidad, marca) // 3 propiedades heredadas de Vehiculo
        this.color = color // 1 propiedad propia de Auto
    }

    getColor(): string {
        return this.color
    }

    setColor(color: string): void {
        this.color = color
    }

    getNumPuertas(): number {
        // * 3 Polimorfismo
        return super.getNumPuertas() + 1; // llamamos al metodo de la clase padre
    }


}


// * Salimos de las clases ahora para crear instancias.

const ferrari = new Auto(2, 300, "ferrari", "blanco")
const moto = new Vehiculo(2, 300, "Honda")

// ! ferrari.numPuertas = 4 [no funciona si las prop son privadas] 
ferrari.setNumPuertas(4)

console.log(ferrari.getNumPuertas()); // 5 llamamos al metodo de la clase hija

const arrVehiculos: Vehiculo[] = [ferrari, moto] // ferrari (le agrega sus propias prop.) y moto cumplen con las propiedades de la clase Vehiculo

// * Polimorfismo, la capacidad de cambiar el comportamiento de algo depende del contexto donde este se encuentre ubicado 
for (const vehiculo of arrVehiculos) {
    console.log(vehiculo.getNumPuertas()); // El metodo se adapta al contexto donde se encuentra, y retorna dos valores diferentes
}


// TODO Hablemos de Typescript y de utilities types.


interface Persona {
    nombre: string;
    edad: number;
    dni: string;
}

interface Alumno extends Persona {
    curso: string;
}

const persona1: Partial<Persona> = {
    nombre: "Juan",
    edad: 20,
    //* Gracias a la utilidad Partial podemos hacer que todas las propiedades sean opcionales
}

const persona2: Required<Persona> = { // * Todas las propiedades son requeridas
    nombre: "Juan",
    edad: 20,
    dni: "12345678"
}

type PersonReadOnly = Readonly<Persona> // * Sera reutilizable en todo el proyecto y de solo lectura
const personaModified: PersonReadOnly = {
    nombre: "Juan",
    edad: 22,
    dni: "12345678",
}

// ! Gracias a la creacion de nuestro propio tipo ya no podemos modificar las propiedades de personaModified
// personaModified.dni = "33787475"


// TODO Hablemos ahora de los tipos genericos

interface Curso {
    nombre: string;
    duration: number;
}

interface Escuela {
    nombre: string;
    anos: number;
    cursos: Curso[];
}



// * Tipo Generico. <T>: Es reemplazada por el tipo que se le pase al momento de llamar a la fc

const logger = <T>(variable: T) => {
    console.log(variable); // JSON.stringify(variable) para que se vea mas bonito
}

logger<string>("esto es un string")
logger<number>(123)
logger<boolean>(true)
logger<Curso>({ nombre: "typescript", duration: 10 })
logger<Curso[]>([{ nombre: "typescript", duration: 10 }])
logger<Escuela>({ nombre: "typescript", anos: 10, cursos: [{ nombre: "typescript", duration: 10 }] })

logger<Persona>(personaModified) // Es valido pero quiza no sea lo que necesitamos. No tenemos (variable.nombre)

interface GenericType<T> {
    variable: T;
    otraVariable: string
}

const variable: GenericType<string> = {
    variable: "esto es un string",
    otraVariable: "esto es otro string"
}
const variable2: GenericType<number> = {
    variable: 12345,
    otraVariable: "esto es otro string"
}






