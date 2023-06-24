/*
let msg: string = 'Hello Ollie'
msg = 'happy pig'
msg = 'chao Ollie'
console.log(msg)
*/


/* 
TODO Tipos Basicos

* Tipos de datos en Javascript
? number, string, boolean, null, undefined, object, function. (Array is a object)

* Tipos de datos en Typescript
? any, unknown, never, arrays, tuplas, enums

* Tipos inferidos
? typescript es inteligente y cuando iniciamos una variable con un tipo de dato asocia esa variable al tipo dado.

* String - Number
? Tambien son considerados objetos en JS pq tiene prototipos y metodos

*/



let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'T-Rex'
let extintos: boolean = true

let totalDinosaurios = 150 // inferido asocia por asignacion qe la var siempre sera numerica
//* totalDinosaurios = 'veinte'   Marca error por asignacion solo acepta datos number

let myvar  //! Inicializada por defecto es de tipo ANY (prohibida)

function chanchitoFeliz(config: any){  //! PROHIBIDO (no nos sirve typescript sino)
    return config
}

let animales: string[] = ['chanchito', 'perrito', 'gatito']
let nums: number[] = [1,2,3]
let nums2 = [] //! Will be ANY
let checks: boolean[] = []

//TODO Metodo alternativo de TS p/ definir el metodo array.
let nums3: Array<number> = []

//? map: Iteramos los elem de un arreglo y les aplicamos una fc.
//me sugiere solo metodos para Strings reconoce el tipo de la var.
animales.map(x => x.charAt) 


