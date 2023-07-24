interface Persona {
    name: string,
    lastname: string
}

interface VideoGamer extends Persona {
    videoGames: string[]
}

interface Police extends Persona {
    fireGuns: number[]
}


function correctTellMeWhatYouAreHolding(persona: VideoGamer): string
function correctTellMeWhatYouAreHolding(persona: Police): number[]

// * Comprobacion de TS de que reciba un objeto tipo VideoGamer o tipo Police
// hay que tratar de no hacerlo, solo trabajar con un clase padre mas general.
function correctTellMeWhatYouAreHolding(persona: any): any {
    if (persona.videoGames) return persona.videoGames
    else return persona.fireGuns
}

const policeman = {
    name: "Agan",
    lastname: "Bucal",
    fireGuns: [123123]
}

const correctResult = correctTellMeWhatYouAreHolding(policeman)

const showNumbers = (param: number[]) => {
    return param.map((num) => num * 2)
}

type ReturnOfShowNumbers = ReturnType<typeof showNumbers> // tomo el tipado del resultado de la funcion de una vez


// * Trataremos de qe TS incluya cual es el tipo sin hacer comprobaciones

const arrValores = [
    {
        number: "1",
        label: "numero 1"
    },
    {
        number: "2"
    }
]

const metodo = (param: typeof arrValores) => {
    const indexArr = [1, 2]
    const result = param[indexArr[0]].label //guardamos la referencia
    if (result) console.log(result);
}

// * 1er Pregunta de entrevista de typescript

interface Kid {
    name: string,
    age: number
}

// TODO Lo mejor es que todas nuestras interfaces extiendan de una mas general.

interface Student extends Kid {
    school: string
}

interface RatKid extends Kid {
    job: boolean
}

// name y age las hereda de Kid
const studentKid: Student = {
    name: "Agan",
    age: 12,
    school: "Colegio Bilingue"
}

const workerKid: RatKid = {
    name: "Haganmelo",
    age: 14,
    job: true
}

const tellMeYourName = (kid: Kid) => { // ? (kid: RatKid | Student)
    const age = kid.age
    return age
}

// * Funciona porque Student y RatKid heredan de Kid la propiedad age
tellMeYourName(studentKid) // 12
tellMeYourName(workerKid) // 14


// * 2da Pregunta de entrevista de trabajo
// Tenemos dos interfaces que son iguales
interface Type1 {
    param1: String
}

interface Type2 {
    param1: String
}

const test1: Type1 = {
    param1: 'hola'
}

const test3 = {
    param1: 'hola'
}

const test2: Type2 = test1 // * El shape de Type1 es igual al shape de Type2

type Test = typeof test3 // typescript es inteligente y sabe que test3 es de tipo Type1
// Esto no funciona con interface pq ya es un tipo, es como hacer el tipo de un tipo

// ! No se recomienda tener en la app muchos tipos qe sean iguales.


// * Accedemos al DOM para buscar el id y utilizarlo en un metodo y tipar el resultado

type ReturnGetElementById = ReturnType<typeof document.getElementById> // HTMLElement | null

const getHtml = (id: string) => {
    return document.getElementById(id)
}

const html = getHtml('MyId') // HTMLElement | null, HTMLDivElement tambien es un HTMLElement
const modifyHtml = (html: ReturnType<typeof getHtml>) => {
    if (html?.innerHTML !== null && html !== null) {
        html.style.color = 'red'
        html.innerHTML = 'Hello World' // ? Con html. podemos acceder a los metodos y propiedades de HTMLDivElement
    }
}
