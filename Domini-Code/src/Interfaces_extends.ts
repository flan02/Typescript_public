//* Interfaces
//TODO podemos reutilizar interfaces y extenderlas


interface Person {
    id: number
    name: string
}

//* extends indica qe utilizara propiedades de Person.

interface Employees extends Person {
  /*  id: number
    name: string */
    dept: string
}

interface Customers extends Person {
  /*  id: number
    name: string  */
    country: string
}

/*
const employee: Employees = {
    id: 1,
    name: "Homer J Simpson",
    dept: "Ever Green 742",
}
*/
/*
const customer: Customers = {
    id: 1,
    name: "Montgomery Burns",
    country: "United States"
}
*/
//TODO implementacion para Clases

interface Animal {
    name: string
    getDogs: () => void
    getCats: () => void
    getDucks?: () => void
}

class Zoo implements Animal {
    name= "Dogui"
    getCats(): void {}
    getDogs(): void {}
}