import { PI, Person, generateRandomNumber } from './myModules'
import { PI as myPI } from './myModules'
import * as myCode from './myModules'
// myCode.Person || myCode.PI || myCode.Person


//"moduleResolution": "node10"  DESCOMENTAR

const user: Person = {
    id: 1,
    name: "Dominicode"
}

console.log(PI)
console.log(myPI)
console.log(user)  // no funciona

console.log(generateRandomNumber()); // no funciona